# Структура страниц для каждого города

## Общая информация

Проект использует Next.js с динамическими роутами. Все страницы городов генерируются из одного шаблона `app/areas/[slug]/page.tsx`, но каждая страница имеет уникальный контент на основе данных из `data/cities.ts`.

## URL структура

Каждый город имеет свой уникальный URL:

- `/areas/kent` - для города Kent
- `/areas/federal-way` - для города Federal Way
- `/areas/auburn` - для города Auburn
- `/areas/tacoma` - для города Tacoma
- `/areas/milton` - для города Milton
- `/areas/edgewood` - для города Edgewood
- `/areas/puyallup` - для города Puyallup

## Структура данных города

Каждый город в `data/cities.ts` имеет следующую структуру:

```typescript
interface CityInfo {
  name: string; // Название города (например, "Kent")
  slug: string; // URL slug (например, "kent")
  description: string; // Короткое описание для мета-тегов и hero секции
  intro: string; // Вводный абзац о городе
  faq: Array<{
    // Массив вопросов и ответов
    question: string;
    answer: string;
  }>;
}
```

## Структура страницы (сверху вниз)

### 1. Meta Tags (генерируются динамически)

- **Title**: `Sell Your House in {city.name}, WA - Cash Offer | Washington State`
- **Description**: `{city.description} Buying houses in {city.name} and throughout Washington State.`
- **OpenGraph**: аналогичные title и description
- **Twitter Card**: аналогичные title и description

### 2. Schema.org разметка (JSON-LD)

- **LocalBusiness Schema**: включает название города в areaServed
- **Breadcrumb Schema**: показывает путь Home > Areas We Buy > {city.name}, WA

### 3. Hero Section (CityHeroSection)

**Уникальные элементы:**

- H1 заголовок: `Sell Your House in {city.name}, WA — Fast & Fair`
- Описание: `{city.description}`
- Логотип компании
- Форма для получения предложения (LeadForm)
- Контактная информация (телефон и email)

**Общие элементы:**

- Фоновое видео/изображение
- Кнопки CTA ("Get My Cash Offer", "Start in 60 seconds")

### 4. Trust Badges Section

**Общая секция** (одинаковая для всех городов)

- Бейджи доверия компании

### 5. How It Works Section

**Уникальные элементы:**

- H2 заголовок: `How It Works in {city.name}`
- Подзаголовок: `We're one stop shop for selling your house in {city.name}`

**Общие элементы:**

- Компонент StepTimeline (шаги процесса)

### 6. About Selling in City Section

**Уникальные элементы:**

- H2 заголовок: `Selling Your House in {city.name}, WA`
- Вводный абзац: `{city.intro}` (уникальный для каждого города)
- Параграф с упоминанием города
- H3 заголовок: `Why Sell to Us in {city.name}?`
- Список преимуществ с упоминанием города: `Local {city.name} market expertise`

### 7. Reviews Section

**Общая секция** (одинаковая для всех городов)

- Отзывы клиентов

### 8. FAQ Section

**Уникальные элементы:**

- H2 заголовок: `Frequently Asked Questions - {city.name}`
- FAQ аккордеон с вопросами из `city.faq` (уникальные для каждого города)

### 9. CTA Section

**Уникальные элементы:**

- Заголовок: `Ready to Sell Your {city.name} Home?`
- Подзаголовок: общий для всех

## Пример данных для города Kent

```typescript
{
  name: 'Kent',
  slug: 'kent',
  description: 'Selling your house in Kent, WA? Get a fair cash offer from your local principal buyer. No repairs required before sale.',
  intro: `Kent is a vibrant community in South King County, known for its diverse neighborhoods and strong real estate market. Whether you're dealing with an inherited property, facing foreclosure, or simply need to sell quickly, we understand the local market dynamics and can provide a transparent cash offer for your Kent home.`,
  faq: [
    {
      question: 'Do you buy houses in Kent?',
      answer: 'Yes, we specialize in buying houses in Kent and throughout South King County. We understand the local market and can provide a fair cash offer for your property, regardless of its condition.'
    },
    {
      question: 'How quickly can you close in Kent?',
      answer: 'We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. No pressure, just flexibility.'
    },
    {
      question: 'What areas of Kent do you serve?',
      answer: 'We serve all areas of Kent, including East Hill, West Hill, Kent Station, and surrounding neighborhoods. No Kent property is too far.'
    }
  ]
}
```

## Пример рендеринга для Kent

### HTML структура (упрощенная):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sell Your House in Kent, WA - Cash Offer | Washington State</title>
    <meta
      name="description"
      content="Selling your house in Kent, WA? Get a fair cash offer from your local principal buyer. No repairs required before sale. Buying houses in Kent and throughout Washington State."
    />
    <!-- Schema.org разметка -->
  </head>
  <body>
    <!-- Hero Section -->
    <section>
      <h1>Sell Your House in Kent, WA — Fast & Fair</h1>
      <p>
        Selling your house in Kent, WA? Get a fair cash offer from your local principal buyer. No
        repairs required before sale.
      </p>
      <!-- Форма -->
    </section>

    <!-- Trust Badges -->
    <section>...</section>

    <!-- How It Works -->
    <section>
      <h2>How It Works in Kent</h2>
      <p>We're one stop shop for selling your house in Kent</p>
      <!-- StepTimeline -->
    </section>

    <!-- About Selling -->
    <section>
      <h2>Selling Your House in Kent, WA</h2>
      <p>
        Kent is a vibrant community in South King County, known for its diverse neighborhoods and
        strong real estate market...
      </p>
      <h3>Why Sell to Us in Kent?</h3>
      <ul>
        <li>Local Kent market expertise</li>
        <!-- другие пункты -->
      </ul>
    </section>

    <!-- Reviews -->
    <section>...</section>

    <!-- FAQ -->
    <section>
      <h2>Frequently Asked Questions - Kent</h2>
      <!-- FAQ аккордеон с вопросами о Kent -->
    </section>

    <!-- CTA -->
    <section>
      <h2>Ready to Sell Your Kent Home?</h2>
      <p>Get your cash offer today. No obligation, no pressure.</p>
    </section>
  </body>
</html>
```

## Уникальные элементы для каждого города

### Полностью уникальные:

1. **Название города** - используется в заголовках, описаниях, тексте
2. **Slug** - определяет URL
3. **Description** - уникальное описание для мета-тегов
4. **Intro** - уникальный вводный текст о городе
5. **FAQ** - уникальные вопросы и ответы для каждого города

### Частично уникальные (с подстановкой названия города):

1. **H1 заголовок**: `Sell Your House in {city.name}, WA — Fast & Fair`
2. **H2 заголовки**: содержат название города
3. **Текстовые блоки**: упоминают название города в контексте

### Общие элементы (одинаковые для всех):

1. TrustBadges компонент
2. StepTimeline компонент
3. ReviewsSection компонент
4. Структура и стили
5. Форма LeadForm
6. Общие CTA тексты

## Текущие города в системе

1. **Kent** (`/areas/kent`)
2. **Federal Way** (`/areas/federal-way`)
3. **Auburn** (`/areas/auburn`)
4. **Milton** (`/areas/milton`)
5. **Tacoma** (`/areas/tacoma`)
6. **Edgewood** (`/areas/edgewood`)
7. **Puyallup** (`/areas/puyallup`)

## Как добавить новый город

1. Добавить новый объект в массив `cities` в файле `data/cities.ts`
2. Заполнить все поля: `name`, `slug`, `description`, `intro`, `faq`
3. Страница автоматически создастся по URL `/areas/{slug}`

## Технические детали

- **Фреймворк**: Next.js 14+ (App Router)
- **Генерация**: Static Site Generation (SSG) через `generateStaticParams()`
- **Типизация**: TypeScript
- **Стилизация**: Tailwind CSS
- **Компоненты**: React Server Components + Client Components где необходимо
