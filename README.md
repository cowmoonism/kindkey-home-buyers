# KindKey Home Buyers LLC - Lead Generation Website

A professional, production-ready multi-page lead generation website for KindKey Home Buyers LLC, a cash home buyer serving Kent and Federal Way, WA.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Security:** reCAPTCHA v3, Rate limiting (Upstash Redis)
- **Integrations:** CRM webhook, Telegram bot, Gmail SMTP
- **Analytics:** Google Analytics 4
- **Deployment:** Render (via GitHub)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── areas/             # City landing pages
│   └── [pages]            # Main pages
├── components/            # React components
├── lib/                   # Utility functions
├── data/                  # Static data (cities, FAQ, cases)
└── public/                # Static assets
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd washington-flipper
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

4. Fill in environment variables (see Configuration section below)

5. Run development server:

```bash
npm run dev
```

Visit `http://localhost:3000`

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Basic
NODE_ENV=production

# Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# reCAPTCHA
RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=https://your-redis-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# CRM Integration
CRM_WEBHOOK_URL=https://your-crm-webhook-url.com/api/leads

# Telegram Bot
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Email (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your_app_password
LEADS_NOTIFY_EMAIL=notify@yourdomain.com

# Branding (optional, defaults provided)
NEXT_PUBLIC_BRAND_NAME="KindKey Home Buyers"
NEXT_PUBLIC_BRAND_TAGLINE="Your Local Home Buyer in Kent & Federal Way"
NEXT_PUBLIC_PRIMARY_CITIES="Kent,Federal Way"
```

### Getting API Keys

1. **Google reCAPTCHA v3:**
   - Visit https://www.google.com/recaptcha/admin
   - Create a new site (v3)
   - Add your domain
   - Copy Site Key and Secret Key

2. **Upstash Redis (Rate Limiting):**
   - Sign up at https://upstash.com
   - Create a Redis database
   - Copy REST URL and REST Token

3. **Telegram Bot:**
   - Message @BotFather on Telegram
   - Create a new bot with `/newbot`
   - Copy the bot token
   - Get your chat ID from @userinfobot

4. **Gmail SMTP:**
   - Enable 2FA on your Google account
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Use this password (not your regular Gmail password)

5. **Google Analytics:**
   - Create GA4 property at https://analytics.google.com
   - Copy Measurement ID (format: G-XXXXXXXXXX)

## 🚢 Deployment to Render

### Step 1: Push to GitHub

1. Create a new GitHub repository
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy on Render

1. Sign up/login at https://render.com
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Render will auto-detect `render.yaml` configuration
5. Configure environment variables in Render dashboard:
   - Go to your service → Environment
   - Add all variables from `.env.example`
   - Set `NEXT_PUBLIC_*` variables as Public (visible to client)
   - Set others as Private (secrets)

### Step 3: Domain Setup (GoDaddy → Render)

1. **In Render Dashboard:**
   - Go to your service → Settings → Custom Domains
   - Add domain: `washingtonflipper.com`
   - Copy the CNAME or A record values

2. **In GoDaddy DNS Settings:**
   - Log in to GoDaddy
   - Go to DNS Management for `washingtonflipper.com`
   - Add/Update records:
     - **A Record:** `@` → Render's IP (if provided)
     - **CNAME Record:** `www` → Render's hostname (e.g., `washington-flipper.onrender.com`)

3. **Wait for DNS propagation** (can take up to 48 hours, usually 15-30 minutes)

4. **SSL Certificate:**
   - Render automatically provisions SSL via Let's Encrypt
   - Wait for certificate to be issued (usually within minutes)

### Step 4: Verify Deployment

1. Visit `https://washingtonflipper.com`
2. Test form submission
3. Check that leads are received in:
   - CRM (if configured)
   - Telegram (if configured)
   - Email inbox (if configured)

## 📝 Testing Integrations

### Test Lead Submission

1. Submit a test lead through the contact form
2. Verify:
   - CRM webhook receives POST request
   - Telegram message is sent
   - Email notification is received
   - Rate limiting works (try 4+ submissions quickly)

### Test Rate Limiting

Try submitting the form 4+ times within 15 minutes. The 4th attempt should be blocked.

## 🔒 Security Features

- **reCAPTCHA v3:** Invisible bot protection
- **Rate Limiting:** 3 submissions per 15 minutes per IP
- **Server-side Validation:** Zod schema validation
- **HTTPS Only:** Enforced via Render
- **Input Sanitization:** All user inputs validated

## 📊 Analytics

Google Analytics 4 events tracked:

- `lead_submit` - When form is submitted
- `hero_cta_click` - Hero CTA button clicked
- `whatsapp_click` - WhatsApp link clicked
- `call_click` - Phone number clicked

## 🎨 Design System

- **Primary Background:** `#FFFFFF` (White)
- **Secondary Background:** `#F8F9FA` (Light Gray)
- **Accent Color:** `#119BCD` (Teal - primary CTA)
- **Secondary Accent:** `#0EA5E9` (Light Blue)
- **Divider Color:** `#016BA9` (Dark Blue)
- **Warm Amber:** `#F59E0B`
- **Success Green:** `#10B981`
- **Text Primary:** `#1F2937` (Dark Gray)
- **Text Secondary:** `#6B7280` (Gray)
- **Typography:** Inter (UI), Source Serif Pro (accents)

## 📄 Pages

- `/` - Homepage with hero video and lead form
- `/how-it-works` - 4-step process explanation
- `/success` - Case studies and success stories
- `/about` - About us and service areas
- `/contact` - Extended contact form
- `/thank-you` - Post-submission thank you page
- `/areas/kent` - Kent-specific landing page
- `/areas/federal-way` - Federal Way-specific landing page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - TypeScript type checking
- `npm run format` - Format code with Prettier

## 📦 Dependencies

Key dependencies:

- `next` - React framework
- `react` - UI library
- `framer-motion` - Animations
- `zod` - Schema validation
- `react-hook-form` - Form handling
- `nodemailer` - Email sending
- `@upstash/ratelimit` - Rate limiting
- `@upstash/redis` - Redis client

## 🐛 Troubleshooting

### Form not submitting

- Check browser console for errors
- Verify reCAPTCHA keys are set correctly
- Check API route logs in Render dashboard

### Emails not sending

- Verify Gmail App Password (not regular password)
- Check SMTP credentials in environment variables
- Review Render logs for SMTP errors

### Rate limiting not working

- Verify Upstash Redis credentials
- Check that `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set

### Telegram not working

- Verify bot token from @BotFather
- Check chat ID (get from @userinfobot)
- Ensure bot is not blocked

## 📞 Support

For issues or questions, contact through the website or check the documentation.

## 📜 License

Copyright © 2024 KindKey Home Buyers LLC. All rights reserved.
