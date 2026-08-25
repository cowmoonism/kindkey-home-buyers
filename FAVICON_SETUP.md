# Favicon Setup Guide

## 📐 Required Sizes

Для полноценной поддержки favicon на всех устройствах нужны следующие размеры:

### Основные favicon:

- **16x16** - Стандартный размер для вкладок браузера
- **32x32** - Для панели задач и закладок
- **48x48** - Для Windows и других систем
- **favicon.ico** - Мультиразмерный ICO файл (содержит 16x16, 32x32, 48x48)

### Apple Touch Icon:

- **180x180** - Для iOS устройств (iPhone, iPad)

### Android/PWA:

- **192x192** - Для Android устройств
- **512x512** - Для PWA и высоких разрешений

## 🎨 Создание Favicon из logo-header.avif

### Вариант 1: Онлайн конвертеры (рекомендуется)

1. **Конвертируйте AVIF в PNG:**
   - Используйте https://convertio.co/avif-png/ или https://cloudconvert.com/avif-to-png
   - Загрузите `logo-header.avif`
   - Конвертируйте в PNG

2. **Создайте нужные размеры:**
   - Используйте https://www.favicon-generator.org/ или https://realfavicongenerator.net/
   - Загрузите PNG версию logo-header
   - Генератор создаст все нужные размеры автоматически

3. **Скачайте и разместите файлы:**
   - Скопируйте все созданные файлы в папку `public/`

### Вариант 2: Использование ImageMagick (локально)

```bash
# Установите ImageMagick (если еще не установлен)
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Конвертируйте AVIF в PNG
magick convert logo-header.avif logo-header.png

# Создайте разные размеры
magick convert logo-header.png -resize 16x16 favicon-16x16.png
magick convert logo-header.png -resize 32x32 favicon-32x32.png
magick convert logo-header.png -resize 48x48 favicon-48x48.png
magick convert logo-header.png -resize 180x180 apple-touch-icon.png
magick convert logo-header.png -resize 192x192 android-chrome-192x192.png
magick convert logo-header.png -resize 512x512 android-chrome-512x512.png

# Создайте ICO файл (мультиразмерный)
magick convert logo-header.png -define icon:auto-resize=16,32,48 favicon.ico
```

### Вариант 3: Использование онлайн генератора

1. Перейдите на https://realfavicongenerator.net/
2. Загрузите `logo-header.avif` (или конвертированную PNG версию)
3. Настройте параметры:
   - iOS: включите Apple touch icon
   - Android: включите Android Chrome icons
   - Windows: включите Windows tiles
4. Скачайте пакет и распакуйте файлы в `public/`

## 📁 Структура файлов

После создания всех файлов, структура `public/` должна содержать:

```
public/
  ├── favicon.ico              (мультиразмерный ICO)
  ├── favicon-16x16.png        (16x16 PNG)
  ├── favicon-32x32.png        (32x32 PNG)
  ├── favicon-48x48.png        (48x48 PNG)
  ├── apple-touch-icon.png     (180x180 PNG)
  ├── android-chrome-192x192.png (192x192 PNG)
  └── android-chrome-512x512.png (512x512 PNG)
```

## ✅ Проверка

После размещения файлов:

1. Перезапустите dev сервер: `npm run dev`
2. Откройте сайт в браузере
3. Проверьте favicon во вкладке браузера
4. Проверьте в DevTools → Network, что файлы загружаются

## 🔍 Тестирование на разных устройствах

- **Desktop**: Проверьте favicon во вкладке браузера
- **iOS**: Добавьте сайт на главный экран, проверьте иконку
- **Android**: Добавьте сайт на главный экран, проверьте иконку
- **PWA**: Если используете PWA, проверьте иконку в манифесте

## 📝 Примечания

- Все файлы должны быть в формате PNG (кроме favicon.ico)
- Используйте прозрачный фон для лучшего отображения
- Убедитесь, что логотип читаем на маленьких размерах (16x16)
- Для favicon.ico используйте квадратное изображение
