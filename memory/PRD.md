# Bright Vision Infotech - Educational Website PRD

## Original Problem Statement
Create a modern, premium educational website for Bright Vision Infotech (est. 1997) with 3D interactive hero, glassmorphism design, floating cards, gradient backgrounds. Professional blue/teal palette.

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Email**: Resend (requires API key)

## User Personas
1. **Students** (Classes 9-12): Looking for coaching
2. **Parents**: Researching institutes
3. **Competitive Exam Aspirants**: NEET/JEE seekers

## What's Been Implemented (Jan 2026)

### Hero Section (Premium 3D Design)
- 3D open book image with floating glassmorphism cards
- Animated background orbs and geometric elements
- "Bright Vision Infotech - Where Futures Begin" heading
- Stats: 25+ Years, 5000+ Students, 95% Success
- CTA: "Enquire Now" + "Explore Courses"

### Stats Bar
- Glassmorphism card below hero
- 25+ Years Experience, 5000+ Students, 1000+ Selections, 10-20 Years Faculty

### Navigation
- Premium navbar with gradient logo
- "Admission Open" CTA button
- Smooth scroll navigation
- Mobile responsive hamburger menu

### Sections
- About Us with director info
- Why Choose Us - 6 key features
- Courses - Classes 9-12, NEET, JEE, Certifications
- Mode of Learning - Classroom, Online, Hybrid
- Testimonials with marquee
- Contact form with social links

### Social Media (Updated)
- WhatsApp: 9811810364
- Instagram: https://www.instagram.com/brightvisioninfotech?igsh=MTBmeGprNTJ2YmY3bA==
- LinkedIn: https://in.linkedin.com/company/brightvisioninfotech

### Special Features
- Custom pen cursor (default)
- Bookmark cursor (interactive elements)
- Smooth animations with Framer Motion
- Glassmorphism UI components

## Email Configuration (Required)
Add to /app/backend/.env:
```
RESEND_API_KEY=re_your_key
SENDER_EMAIL=onboarding@resend.dev
INSTITUTE_EMAIL=your-email@domain.com
```

## Backlog
### P1 - Configure Resend API for email
### P2 - Add Google Maps, photo gallery
### P3 - Admin panel, blog section
