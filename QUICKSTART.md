# Quick Start Guide

## 🎯 Project Overview

This is a production-ready lead generation website for KindKey Home Buyers LLC, built with Next.js 15, TypeScript, and Tailwind CSS.

## ✅ What's Included

- ✅ Multi-page website (Home, How It Works, Success Stories, About, Contact, etc.)
- ✅ City-specific landing pages (Kent, Federal Way)
- ✅ Lead form with validation and reCAPTCHA v3
- ✅ Triple integration: CRM webhook + Telegram + Gmail email
- ✅ Rate limiting (Upstash Redis)
- ✅ Google Analytics 4 integration
- ✅ SEO optimized (sitemap, robots.txt, Schema.org markup)
- ✅ Responsive design with Framer Motion animations
- ✅ Deployment configs (Render + GitHub Actions)

## 🚀 Next Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in:

**Required:**

- `RECAPTCHA_SITE_KEY` & `RECAPTCHA_SECRET_KEY` - Get from Google reCAPTCHA
- `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN` - Get from Upstash
- `TELEGRAM_BOT_TOKEN` & `TELEGRAM_CHAT_ID` - Get from @BotFather
- `SMTP_USER` & `SMTP_PASS` - Gmail App Password (not regular password!)
- `LEADS_NOTIFY_EMAIL` - Email to receive lead notifications

**Optional (for analytics):**

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 ID

**Optional (for CRM):**

- `CRM_WEBHOOK_URL` - Your CRM webhook endpoint

### 3. Replace Placeholder Assets

In `public/` directory, replace:

- `hero-loop.mp4` - Hero video (8-12 seconds, looping)
- `placeholder-before.jpg` - Case study "before" images
- `placeholder-after.jpg` - Case study "after" images
- `favicon.ico` - Website favicon

### 4. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and test the form submission.

### 5. Deploy to Render

1. Push to GitHub
2. Connect repo to Render
3. Render will auto-detect `render.yaml`
4. Add environment variables in Render dashboard
5. Add custom domain (washingtonflipper.com) in Render
6. Update GoDaddy DNS (see README.md)

## 📝 Important Notes

- **Gmail SMTP**: Must use App Password, not your regular Gmail password
- **Rate Limiting**: Works even without Redis (just logs warnings)
- **reCAPTCHA**: Works in dev mode without keys (just logs warnings)
- **Form**: All three integrations (CRM/Telegram/Email) run in parallel (fan-out)

## 🔍 Testing Checklist

- [ ] Form submission works
- [ ] reCAPTCHA verification (if keys set)
- [ ] Rate limiting (try 4+ submissions quickly)
- [ ] Email notification received
- [ ] Telegram message sent (if configured)
- [ ] CRM webhook called (if configured)
- [ ] All pages load correctly
- [ ] Mobile responsive
- [ ] Analytics events fire (if GA configured)

## 📚 Full Documentation

See `README.md` for complete setup and deployment instructions.
