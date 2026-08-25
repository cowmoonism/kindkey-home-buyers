# Переменные окружения для Render

## Минимум для работы (обязательно)

```
NODE_ENV=production

NEXT_PUBLIC_RECAPTCHA_SITE_KEY=ваш_ключ_от_Google
RECAPTCHA_SECRET_KEY=ваш_секрет_от_Google

TELEGRAM_BOT_TOKEN=ваш_токен_от_BotFather
TELEGRAM_CHAT_ID=ваш_chat_id

SMTP_USER=ваш_email@gmail.com
SMTP_PASS=ваш_gmail_app_password
LEADS_NOTIFY_EMAIL=куда_отправлять_лиды@gmail.com
```

## Рекомендуемые (для полной функциональности)

```
# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=https://ваш_redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=ваш_токен

# CRM Integration (опционально)
CRM_WEBHOOK_URL=https://ваш_crm_webhook

# Analytics (опционально)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Публичные переменные (уже заданы в render.yaml, но можно переопределить)

```
NEXT_PUBLIC_BRAND_NAME="KindKey Home Buyers"
NEXT_PUBLIC_BRAND_TAGLINE="Your Local Home Buyer in Kent & Federal Way"
NEXT_PUBLIC_PRIMARY_CITIES="Kent,Federal Way"
```

## Как получить ключи:

### 1. Google reCAPTCHA v3

- https://www.google.com/recaptcha/admin
- Create → v3 → Добавьте домен
- Скопируйте Site Key и Secret Key

### 2. Telegram Bot

- Напишите @BotFather в Telegram
- Команда: `/newbot`
- Скопируйте токен
- Для chat_id: напишите @userinfobot и скопируйте ваш ID

### 3. Gmail App Password

- Включите 2FA на Google аккаунте
- https://myaccount.google.com/apppasswords
- Создайте App Password для "Mail"
- Используйте этот пароль (НЕ обычный Gmail пароль!)

### 4. Upstash Redis (для rate limiting)

- https://upstash.com
- Создайте Redis database
- Скопируйте REST URL и REST Token

### 5. Google Analytics 4 (опционально)

- https://analytics.google.com
- Создайте GA4 property
- Скопируйте Measurement ID (формат: G-XXXXXXXXXX)
