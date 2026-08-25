# Sitemap Troubleshooting Guide

## Возможные причины, почему Google не может получить sitemap на Render

### 1. ✅ Проверьте доступность sitemap вручную

Откройте в браузере:

```
https://kindkeyhomebuyers.com/sitemap.xml
```

**Ожидаемый результат:** Должен отобразиться XML-файл со списком всех URL.

**Если не открывается:**

- Проверьте логи в Render Dashboard
- Убедитесь, что сайт работает и доступен
- Проверьте, что домен правильно настроен

### 2. ✅ Проверьте robots.txt

Откройте:

```
https://kindkeyhomebuyers.com/robots.txt
```

**Должно быть:**

```
Sitemap: https://kindkeyhomebuyers.com/sitemap.xml
```

### 3. ✅ Проверьте формат sitemap

Sitemap должен быть валидным XML. Проверьте через:

- [XML Sitemap Validator](https://www.xml-sitemap.com/validate-xml-sitemap.html)
- [Google Search Console Sitemap Tester](https://search.google.com/search-console)

### 4. ✅ Проблемы с Render

**Возможные проблемы:**

#### a) Sitemap генерируется динамически

- Next.js 15 должен автоматически генерировать sitemap из `app/sitemap.ts`
- Убедитесь, что файл находится в правильном месте: `app/sitemap.ts`
- Проверьте, что нет ошибок при сборке (build)

#### b) Проблемы с маршрутизацией

- На Render может потребоваться дополнительная настройка для статических файлов
- Проверьте, что `render.yaml` правильно настроен

#### c) Проблемы с переменными окружения

- Убедитесь, что все переменные окружения установлены в Render Dashboard
- Проверьте, что `NODE_ENV=production`

### 5. ✅ Проверьте логи в Render

1. Зайдите в Render Dashboard
2. Откройте ваш сервис
3. Перейдите в раздел "Logs"
4. Попробуйте открыть `/sitemap.xml` и посмотрите на ошибки

### 6. ✅ Проверьте DNS и SSL

- Убедитесь, что домен `kindkeyhomebuyers.com` правильно настроен в Render
- Проверьте, что SSL-сертификат действителен
- Убедитесь, что DNS записи настроены правильно

### 7. ✅ Проверьте в Google Search Console

1. Зайдите в Google Search Console
2. Перейдите в "Sitemaps"
3. Попробуйте добавить sitemap: `https://kindkeyhomebuyers.com/sitemap.xml`
4. Посмотрите на конкретную ошибку, которую показывает Google

**Типичные ошибки:**

- "Couldn't fetch" - проблема с доступностью
- "Invalid format" - проблема с форматом XML
- "Contains errors" - ошибки в структуре sitemap

### 8. ✅ Решения

#### Решение 1: Убедитесь, что sitemap доступен

Проверьте в терминале:

```bash
curl https://kindkeyhomebuyers.com/sitemap.xml
```

#### Решение 2: Проверьте, что sitemap генерируется при build

В Render Dashboard проверьте логи сборки (build logs). Должны быть строки типа:

```
Route (app)                              Size     First Load JS
...
/sitemap.xml                             0 B
```

#### Решение 3: Добавьте явную проверку

Создайте тестовый endpoint для проверки:

```typescript
// app/api/test-sitemap/route.ts
import { NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

export async function GET() {
  try {
    const sitemapData = sitemap();
    return NextResponse.json({
      success: true,
      count: sitemapData.length,
      urls: sitemapData.map((item) => item.url),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
```

Затем проверьте: `https://kindkeyhomebuyers.com/api/test-sitemap`

### 9. ✅ Альтернативное решение: Статический sitemap.xml

Если динамический sitemap не работает, можно создать статический файл:

1. Создайте файл `public/sitemap.xml` (вручную)
2. Или используйте генератор sitemap при build

### 10. ✅ Проверка через Google Search Console

1. Зайдите в Google Search Console
2. Sitemaps → Добавить новый sitemap
3. Введите: `sitemap.xml`
4. Нажмите "Отправить"
5. Подождите несколько минут
6. Проверьте статус

## Быстрая диагностика

Выполните эти команды для проверки:

```bash
# Проверка доступности сайта
curl -I https://kindkeyhomebuyers.com

# Проверка sitemap
curl https://kindkeyhomebuyers.com/sitemap.xml

# Проверка robots.txt
curl https://kindkeyhomebuyers.com/robots.txt
```

## Контакты для поддержки

Если проблема не решается:

1. Проверьте логи в Render Dashboard
2. Обратитесь в поддержку Render
3. Проверьте документацию Next.js 15 по sitemap
