"""Backend API tests for Bright Vision Infotech (contact form + status)"""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://bvi-institute.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health / root
class TestRoot:
    def test_api_root(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert "Bright Vision" in r.json().get("message", "")


# Contact form
class TestContactForm:
    def test_submit_contact_with_all_fields(self, api_client):
        payload = {
            "name": "TEST_John Doe",
            "phone": "9811810364",
            "email": "TEST_john@example.com",
            "message": "Interested in NEET preparation course",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str)
        assert "timestamp" in data
        assert data["status"] in ["email_sent", "email_failed", "stored_only"]

        # Verify persistence via GET
        all_r = api_client.get(f"{BASE_URL}/api/contact")
        assert all_r.status_code == 200
        ids = [c["id"] for c in all_r.json()]
        assert data["id"] in ids

    def test_submit_contact_without_email(self, api_client):
        payload = {
            "name": "TEST_Jane",
            "phone": "9999999999",
            "message": "Need course info",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] is None

    def test_submit_contact_missing_required_fields(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json={"name": "Only Name"})
        assert r.status_code == 422

    def test_get_contact_submissions(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        if data:
            first = data[0]
            for key in ["id", "name", "phone", "message", "timestamp", "status"]:
                assert key in first
            # Ensure mongo _id is not leaked
            assert "_id" not in first


# Status endpoints
class TestStatus:
    def test_create_and_get_status(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/status", json={"client_name": "TEST_client"})
        assert r.status_code == 200
        data = r.json()
        assert data["client_name"] == "TEST_client"
        assert "id" in data

        r2 = api_client.get(f"{BASE_URL}/api/status")
        assert r2.status_code == 200
        assert isinstance(r2.json(), list)
