from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
INSTITUTE_EMAIL = os.environ.get('INSTITUTE_EMAIL', 'onboarding@resend.dev')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactFormRequest(BaseModel):
    name: str
    phone: str
    message: str
    email: Optional[str] = None

class ContactFormResponse(BaseModel):
    id: str
    name: str
    phone: str
    message: str
    email: Optional[str] = None
    timestamp: str
    status: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Bright Vision Infotech API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(request: ContactFormRequest):
    """Submit contact form and send email notification to institute"""
    contact_id = str(uuid.uuid4())
    timestamp = datetime.now(timezone.utc).isoformat()
    
    # Store in database
    doc = {
        "id": contact_id,
        "name": request.name,
        "phone": request.phone,
        "message": request.message,
        "email": request.email,
        "timestamp": timestamp,
        "status": "pending"
    }
    
    await db.contact_submissions.insert_one(doc)
    
    # Send email notification
    if resend.api_key:
        try:
            html_content = f"""
            <html>
            <body style="font-family: Arial, sans-serif; padding: 20px;">
                <h2 style="color: #0B2545;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> {request.name}</p>
                <p><strong>Phone:</strong> {request.phone}</p>
                <p><strong>Email:</strong> {request.email or 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">{request.message}</p>
                <hr style="margin-top: 30px;">
                <p style="color: #666; font-size: 12px;">Bright Vision Infotech - Contact Form</p>
            </body>
            </html>
            """
            
            params = {
                "from": SENDER_EMAIL,
                "to": [INSTITUTE_EMAIL],
                "subject": f"New Contact Form: {request.name}",
                "html": html_content
            }
            
            await asyncio.to_thread(resend.Emails.send, params)
            logger.info(f"Email notification sent for contact: {contact_id}")
            
            # Update status to sent
            await db.contact_submissions.update_one(
                {"id": contact_id},
                {"$set": {"status": "email_sent"}}
            )
            doc["status"] = "email_sent"
            
        except Exception as e:
            logger.error(f"Failed to send email notification: {str(e)}")
            doc["status"] = "email_failed"
    else:
        logger.warning("Resend API key not configured, skipping email notification")
        doc["status"] = "stored_only"
    
    return ContactFormResponse(**{k: v for k, v in doc.items() if k != '_id'})

@api_router.get("/contact", response_model=List[ContactFormResponse])
async def get_contact_submissions():
    """Get all contact form submissions"""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    return submissions

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
