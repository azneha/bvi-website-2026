# Bright Vision Infotech - Educational Website PRD

## Original Problem Statement
Create a modern, clean, and professional educational website for Bright Vision Infotech, established in 1997. Professional design with white + blue + teal palette. Features: Hero section, About Us, Courses, Contact form with email, WhatsApp chat, social links.

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Email**: Resend (requires API key configuration)

## User Personas
1. **Students** (Classes 9-12): Looking for coaching classes
2. **Parents**: Researching institutes for their children
3. **Competitive Exam Aspirants**: NEET/JEE preparation seekers

## Core Requirements (Static)
- [x] Hero section with book-opening animation
- [x] About Us section with institute history
- [x] Why Choose Us - 6 key strengths
- [x] Courses Offered - Classes 9-12, NEET, JEE, Certifications
- [x] Mode of Learning - Classroom, Online, Hybrid
- [x] Testimonials with marquee
- [x] Contact form with database storage
- [x] WhatsApp floating button (9811810364)
- [x] Social links (Instagram, LinkedIn)
- [x] Custom pen/bookmark cursor
- [x] Responsive design

## What's Been Implemented (Jan 2026)
- Complete landing page with all 8 sections
- Book-opening animation on load
- Smooth scroll navigation with bookmark-style tabs
- Contact form API with MongoDB storage
- WhatsApp integration
- Social media links
- Custom cursor design
- Mobile responsive navigation

## Email Configuration (Required for Production)
Add to /app/backend/.env:
```
RESEND_API_KEY=re_your_key
SENDER_EMAIL=onboarding@resend.dev
INSTITUTE_EMAIL=your-email@domain.com
```

## Prioritized Backlog
### P0 (Critical) - DONE
- All core sections implemented

### P1 (High Priority)
- Configure Resend API for email notifications
- Add actual Instagram/LinkedIn profile URLs
- SEO meta tags optimization

### P2 (Medium Priority)
- Add Google Maps embed in contact section
- Course detail pages with expanded info
- Photo gallery of institute

### P3 (Low Priority)
- Admin panel for managing testimonials
- Blog/News section
- Online fee payment integration

## Next Tasks
1. Get Resend API key and configure email notifications
2. Update social media links with actual profiles
3. Add Google Analytics tracking
