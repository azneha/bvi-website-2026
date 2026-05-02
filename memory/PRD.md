# Bright Vision Infotech - Premium Educational Website PRD

## Original Problem Statement
Complete redesign of educational website with premium SaaS/ed-tech feel. NO book images. Modern curved sections, floating cards, animated counters, glassmorphism design. Colors: deep blue, teal, green accents.

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Email**: Resend (requires API key)

## What's Been Implemented (Jan 2026)

### Hero Section
- Curved dark section with gradient background
- Floating UI elements (icons with animations)
- "Bright Vision Infotech - Where Bright Futures Begin"
- Trust indicators: 5000+ Students, 4.9 Rating, 25+ Years
- CTA: "Explore Courses" + "Watch Video"

### Stats Section
- Glassmorphism card with animated counters
- 25+ Years Experience, 5000+ Students, 1000+ Selections, 10-20 Years Faculty

### Director Section (NEW)
- S. S. Shadman - Founder & Director
- 25+ years experience, Mathematics Expert
- Achievement badges: Mathematics Expert, Best Teacher Award, JEE Specialist, 1000+ Selections

### Courses Section
- 4 gradient cards: Classes 9-10, Classes 11-12, NEET Prep, JEE Prep
- Subject tags with hover effects

### Results Section
- Year-wise results (2024, 2023, 2022)
- Testimonials marquee

### News Section (NEW)
- 4 announcement cards
- LIVE scrolling ticker

### Contact Section
- Animated phone numbers (011-44744746, 011-23243036)
- Address with gradient card
- Social links: Instagram + LinkedIn
- Contact form with DB storage

### Removed
- WhatsApp button (as requested)
- Book images (as requested)
- Enquire Now button (as requested)

### Social Media
- Instagram: https://www.instagram.com/brightvisioninfotech?igsh=MTBmeGprNTJ2YmY3bA==
- LinkedIn: https://in.linkedin.com/company/brightvisioninfotech

## Email Configuration (Required)
Add to /app/backend/.env:
```
RESEND_API_KEY=re_your_key
SENDER_EMAIL=onboarding@resend.dev
INSTITUTE_EMAIL=your-email@domain.com
```

## Backlog
### P1 - Configure Resend API for email notifications
### P2 - Add Google Maps to contact, results page with toppers
### P3 - Admin panel, blog integration
