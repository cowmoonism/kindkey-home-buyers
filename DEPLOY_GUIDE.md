# 🚀 Пошаговый гайд по деплою

## Шаг 1: Создание GitHub репозитория

1. Перейдите на https://github.com/new
2. Создайте новый репозиторий:
   - **Repository name:** `washington-flipper` (или любое другое имя)
   - **Visibility:** Private или Public (на ваш выбор)
   - **НЕ** добавляйте README, .gitignore или лицензию (у нас уже есть)
3. Нажмите "Create repository"

## Шаг 2: Подключение к GitHub

После создания репозитория, GitHub покажет инструкции. Выполните в терминале:

```bash
cd "c:\washington flipper"
git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/washington-flipper.git
git branch -M main
git push -u origin main
```

**Или если используете SSH:**

```bash
git remote add origin git@github.com:ВАШ_ЮЗЕРНЕЙМ/washington-flipper.git
git branch -M main
git push -u origin main
```

## Шаг 3: Деплой на Render

### 3.1 Создание аккаунта

1. Перейдите на https://render.com
2. Зарегистрируйтесь или войдите через GitHub

### 3.2 Создание Web Service

1. В Dashboard нажмите **"New +"** → **"Web Service"**
2. Подключите ваш GitHub репозиторий:
   - Нажмите "Connect account" если нужно
   - Выберите репозиторий `washington-flipper`
   - Нажмите "Connect"
3. Render автоматически определит настройки из `render.yaml`
4. Проверьте настройки:
   - **Name:** `washington-flipper`
   - **Environment:** `Node`
   - **Build Command:** `npm ci && npm run build`
   - **Start Command:** `npm run start`

### 3.3 Настройка переменных окружения

В Render Dashboard → ваш сервис → **Environment**:

Добавьте все переменные из `.env.example`:

#### Обязательные (минимум для работы):

```
NODE_ENV=production

NEXT_PUBLIC_RECAPTCHA_SITE_KEY=ваш_ключ
RECAPTCHA_SECRET_KEY=ваш_секрет

TELEGRAM_BOT_TOKEN=ваш_токен
TELEGRAM_CHAT_ID=ваш_chat_id

SMTP_USER=ваш_email@gmail.com
SMTP_PASS=ваш_app_password
LEADS_NOTIFY_EMAIL=куда_отправлять_лиды@gmail.com
```

#### Опциональные (но рекомендуемые):

```
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=ваш_токен

CRM_WEBHOOK_URL=https://ваш_CRM_webhook

NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Публичные переменные (видны клиенту):

```
NEXT_PUBLIC_BRAND_NAME="KindKey Home Buyers"
NEXT_PUBLIC_BRAND_TAGLINE="Your Local Home Buyer in Kent & Federal Way"
NEXT_PUBLIC_PRIMARY_CITIES="Kent,Federal Way"
```

### 3.4 Первый деплой

1. Нажмите **"Create Web Service"**
2. Render начнет сборку (займет 3-5 минут)
3. Дождитесь завершения (статус "Live")
4. Ваш сайт будет доступен по адресу: `https://washington-flipper.onrender.com`

## Шаг 4: Подключение домена (washingtonflipper.com)

### 4.1 В Render Dashboard

1. Откройте ваш сервис → **Settings** → **Custom Domains**
2. Нажмите **"Add Custom Domain"**
3. Введите: `washingtonflipper.com`
4. Render покажет инструкции по DNS

### 4.2 В GoDaddy

1. Войдите в аккаунт GoDaddy
2. Перейдите в **DNS Management** для `washingtonflipper.com`
3. Добавьте/обновите записи:

#### Вариант A: CNAME (рекомендуется)

```
Type: CNAME
Name: www
Value: washington-flipper.onrender.com
TTL: 600 (или минимальное)
```

#### Вариант B: A Record (если Render предоставил IP)

```
Type: A
Name: @
Value: [IP адрес от Render]
TTL: 600
```

4. Сохраните изменения

### 4.3 SSL сертификат

Render автоматически выдаст SSL сертификат через Let's Encrypt:

- Обычно занимает 5-15 минут после настройки DNS
- Проверьте статус в Render Dashboard → Custom Domains

## Шаг 5: Проверка деплоя

1. ✅ Откройте `https://washingtonflipper.com`
2. ✅ Проверьте все страницы
3. ✅ Отправьте тестовую заявку через форму
4. ✅ Проверьте получение уведомлений:
   - Email (проверьте почту)
   - Telegram (проверьте бота)
   - CRM (если настроен)

## 🐛 Troubleshooting

### Сайт не собирается

- Проверьте логи в Render Dashboard
- Убедитесь, что все зависимости в `package.json`
- Проверьте версию Node (должна быть 20+)

### Форма не отправляется

- Проверьте переменные окружения (особенно reCAPTCHA)
- Проверьте логи API в Render Dashboard → Logs
- Убедитесь, что все интеграции настроены

### Домен не работает

- Подождите 15-30 минут (DNS propagation)
- Проверьте DNS записи в GoDaddy
- Используйте https://dnschecker.org для проверки

### SSL не работает

- Убедитесь, что DNS записи корректны
- Подождите еще 15 минут
- Проверьте статус в Render Dashboard

## 📞 Нужна помощь?

Если что-то не работает:

1. Проверьте логи в Render Dashboard
2. Проверьте все переменные окружения
3. Убедитесь, что репозиторий обновлен на GitHub

## ✅ Готово!

После успешного деплоя ваш сайт будет доступен по адресу:

- **Render URL:** `https://washington-flipper.onrender.com`
- **Custom Domain:** `https://washingtonflipper.com`

Удачи! 🎉
