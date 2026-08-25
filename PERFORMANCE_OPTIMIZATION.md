# 🚀 Performance Optimization Guide

## Проблемы производительности и решения

### 1. Большие изображения PNG (668.9 KiB + 664.7 KiB)

**Проблема:** Старые PNG файлы (`logo2.png`, `logo-heder.png`) все еще загружаются на продакшене.

**Решение:**

1. ✅ В коде уже используются AVIF файлы
2. ⚠️ **Нужно удалить старые PNG файлы на Render:**
   - Зайдите в Render Dashboard → Ваш сервис → Settings → Environment
   - Или через SSH/Render Shell удалите старые PNG файлы из `public/`
   - Пересоберите приложение

3. **Проверка после деплоя:**
   ```bash
   # Проверьте, что PNG файлы не доступны
   curl -I https://kindkeyhomebuyers.com/logo2.png
   curl -I https://kindkeyhomebuyers.com/logo-heder.png
   # Должны вернуть 404
   ```

### 2. reCAPTCHA загружается несколько раз (3x 347.6 KiB = 1.04 MiB)

**Проблема:** reCAPTCHA скрипт загружается несколько раз на одной странице.

**Решение:**

1. ✅ Создан единый хук `useRecaptcha` с защитой от дублирования
2. ✅ Добавлена ленивая загрузка через Intersection Observer
3. ⚠️ **После деплоя новой версии проблема должна исчезнуть**

**Проверка:**

- Откройте DevTools → Network
- Отфильтруйте по "recaptcha"
- Должен быть только **один** запрос к `recaptcha/api.js`

### 3. Очистка кэша на Render

После деплоя оптимизаций нужно очистить кэш:

1. **Очистка кэша браузера:**
   - В Render Dashboard → Ваш сервис → Settings → Environment
   - Добавьте временную переменную: `CACHE_BUSTER=2024-01-XX` (текущая дата)
   - Сохраните и пересоберите

2. **Очистка CDN кэша (если используется):**
   - Если используете Cloudflare или другой CDN, очистите кэш там
   - Или добавьте query параметр к URL: `?v=2`

3. **Проверка в браузере:**
   - Откройте DevTools → Network
   - Включите "Disable cache"
   - Обновите страницу (Cmd/Ctrl + Shift + R)

### 4. Оптимизация изображений

**Текущее состояние:**

- ✅ Все изображения конвертированы в AVIF
- ✅ Используется Next.js Image optimization
- ✅ Добавлены `priority` для критических изображений

**Рекомендации:**

- Размер AVIF файлов должен быть < 100 KiB каждый
- Если файлы все еще большие, используйте инструменты:
  ```bash
  # Оптимизация AVIF (если нужно)
  npx @squoosh/cli --avif logo2.png
  ```

### 5. Динамические импорты

**Что сделано:**

- ✅ Компоненты ниже fold загружаются лениво
- ✅ reCAPTCHA загружается только когда форма видна

**Результат:**

- Уменьшен размер начального bundle
- Улучшены метрики LCP и FCP

## Метрики производительности

### Целевые показатели:

- **LCP (Largest Contentful Paint):** < 2.5s
- **FCP (First Contentful Paint):** < 1.8s
- **CLS (Cumulative Layout Shift):** < 0.1
- **Total Blocking Time:** < 200ms
- **Speed Index:** < 3.4s

### Текущие проблемы:

1. **Network Payload:** 2.814 MiB → Цель: < 1.5 MiB
   - После удаления PNG: ~1.5 MiB
   - После оптимизации reCAPTCHA: ~1.0 MiB

2. **Unused JavaScript:** 371 KiB → Цель: < 100 KiB
   - После оптимизации reCAPTCHA: ~20 KiB

3. **Unused CSS:** 40 KiB → Цель: < 20 KiB
   - Частично решено через ленивую загрузку reCAPTCHA

## Чеклист после деплоя

- [ ] Проверить, что PNG файлы не загружаются (404 в Network tab)
- [ ] Проверить, что reCAPTCHA загружается только один раз
- [ ] Проверить PageSpeed Insights (Desktop и Mobile)
- [ ] Проверить метрики Core Web Vitals
- [ ] Очистить кэш браузера и CDN
- [ ] Проверить размер network payload (< 1.5 MiB)

## Дополнительные оптимизации (опционально)

1. **Service Worker для кэширования:**
   - Кэшировать статические ресурсы
   - Offline support

2. **HTTP/2 Server Push:**
   - Push критических ресурсов
   - Настроить в Render (если поддерживается)

3. **Resource Hints:**
   - Уже добавлены `preconnect` для Google Fonts и reCAPTCHA
   - Можно добавить `prefetch` для некритических ресурсов

4. **Code Splitting:**
   - Уже используется через динамические импорты
   - Можно добавить route-based splitting

## Мониторинг

После деплоя отслеживайте:

- Google PageSpeed Insights (еженедельно)
- Google Search Console → Core Web Vitals
- Real User Monitoring (если настроен GA4)
