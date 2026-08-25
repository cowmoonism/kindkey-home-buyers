# Необходимые файлы для favicon

Для полноценной работы favicon нужно добавить следующие файлы в папку `public/`:

## 📁 Список файлов

1. **favicon-16x16.png** - 16x16 пикселей
2. **favicon-32x32.png** - 32x32 пикселей
3. **favicon-48x48.png** - 48x48 пикселей
4. **favicon.ico** - Мультиразмерный ICO файл (16x16, 32x32, 48x48)
5. **apple-touch-icon.png** - 180x180 пикселей (для iOS)
6. **android-chrome-192x192.png** - 192x192 пикселей (для Android)
7. **android-chrome-512x512.png** - 512x512 пикселей (для PWA)

## 🎨 Как создать файлы

### Вариант 1: Онлайн генератор (рекомендуется)

1. Перейдите на https://realfavicongenerator.net/
2. Загрузите ваш логотип (logo-header.avif или его PNG версию)
3. Настройте параметры:
   - iOS: включите Apple touch icon
   - Android: включите Android Chrome icons
   - Windows: включите Windows tiles (опционально)
4. Скачайте пакет и распакуйте все файлы в папку `public/`

### Вариант 2: Использование ImageMagick

Если у вас установлен ImageMagick:

```bash
# Конвертируйте AVIF в PNG (если нужно)
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

### Вариант 3: Использование онлайн конвертеров

1. Конвертируйте `logo-header.avif` в PNG:
   - https://convertio.co/avif-png/
   - https://cloudconvert.com/avif-to-png

2. Используйте PNG для создания favicon:
   - https://www.favicon-generator.org/
   - https://favicon.io/favicon-generator/

## ✅ Текущий статус

- ✅ Конфигурация в `app/layout.tsx` готова
- ✅ Fallback на `logo-header.avif` настроен
- ⏳ Ожидаются PNG файлы в папке `public/`

## 📝 Примечания

- Все PNG файлы должны иметь прозрачный фон (если возможно)
- Убедитесь, что логотип читаем на маленьких размерах (16x16)
- Для лучшего качества используйте квадратное изображение
- После добавления файлов перезапустите dev сервер

## 🔄 После добавления файлов

1. Разместите все файлы в `public/`
2. Перезапустите сервер: `npm run dev`
3. Проверьте favicon в браузере
4. Проверьте в DevTools → Network, что файлы загружаются
