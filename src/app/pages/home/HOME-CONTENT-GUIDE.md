# Home Page Content Configuration Guide

## 📁 Структура

Контент главной страницы вынесен в конфигурационный файл `home-content.config.ts` для упрощения редактирования и поддержки.

```
src/app/pages/home/
├── home-content.config.ts      ← Вся конфигурация контента
├── home.component.ts           ← Логика компонента
├── home.component.html         ← Шаблон (минимальный)
├── home.component.scss         ← Стили
└── components/                 ← Изолированные компоненты
    ├── review-methodology/
    └── evaluation-criteria/
```

---

## 🎯 Как редактировать контент?

### 1. **Редактирование HTML секций**

Откройте `home-content.config.ts` и найдите нужную секцию в массиве `homePageContent`:

```typescript
export const homePageContent: HomeSection[] = [
  {
    id: 'hero',
    html: `
      <section class="hero">
        <div class="hero-container">
          <h1 class="hero-title">Ваш новый заголовок</h1>
          <!-- Редактируйте HTML здесь -->
        </div>
      </section>
    `
  }
];
```

### 2. **Редактирование данных карточек**

Данные для карточек вынесены в отдельные константы:

```typescript
// Большие карточки статей
export const testLargeArticles = [
  {
    title: 'Kraken Review 2025',
    description: '...',
    // ... остальные поля
  }
];

// Обзоры криптовалют
export const cryptoKnowledgeReviews = [
  {
    id: 1,
    title: 'Bitcoin Review',
    // ... остальные поля
  }
];
```

### 3. **Редактирование новостной секции**

```typescript
export const newsData = {
  sectionTitle: 'How-to Guides for Beginners',
  sectionDescription: '...',
  featuredItem: {
    title: 'How to Deposit on Kraken',
    // ...
  },
  regularItems: [
    // ...
  ]
};
```

---

## 🔧 Доступные секции

| ID | Описание | Тип |
|----|----------|-----|
| `hero` | Hero-секция с заголовком и статистикой | HTML |
| `test-large-cards` | Секция с большими карточками статей | HTML + Data |
| `crypto-knowledge` | Обзоры криптовалют | HTML + Data |
| `security-taxes` | Секция безопасности и налогов | HTML + Data |

---

## 📝 Примеры изменений

### Изменить заголовок Hero-секции

```typescript
{
  id: 'hero',
  html: `
    <h1 class="hero-title">Новый заголовок здесь!</h1>
  `
}
```

### Добавить новую карточку криптовалюты

```typescript
export const cryptoKnowledgeReviews = [
  // ... существующие
  {
    id: 4,
    title: 'Cardano Review: Proof-of-Stake Leader',
    category: 'Cryptocurrency',
    date: 'Feb 1, 2025',
    readTime: '5–7 min read',
    author: 'Crypto Team',
    icon: '₳',
    label: 'REVIEW',
    theme: 'light' as const,
    link: '/coins/cardano-review',
    buttonText: 'Read Review',
    imageUrl: '/images/home/ADA-card-article-preview.webp'
  }
];
```

### Изменить ссылки в Hero Stats

```typescript
html: `
  <div class="stats">
    <a routerLink="/новая-ссылка" class="stat-item">
      <span class="stat-number">Новый текст</span>
      <span class="stat-label">Новое описание</span>
    </a>
  </div>
`
```

---

## ✅ Преимущества такого подхода

1. **Централизация** - весь контент в одном файле
2. **Читаемость** - код компонента не засорен HTML
3. **Поддержка** - легко найти и изменить текст
4. **Переиспользование** - данные можно экспортировать в другие компоненты
5. **Типизация** - TypeScript интерфейсы предотвращают ошибки
6. **Версионность** - изменения контента легко отследить в Git

---

## 🚨 Важные замечания

### Angular-специфичные директивы

В HTML секциях **НЕ РАБОТАЮТ** Angular директивы как:
- `*ngIf`
- `*ngFor`
- `@for`
- `(click)`
- `[property]`

**Для динамических данных используйте компоненты!**

```html
<!-- ❌ НЕ РАБОТАЕТ -->
<div *ngIf="showContent">Content</div>

<!-- ✅ РАБОТАЕТ -->
<div class="crypto-knowledge-grid">
  <!-- Рендерится через Angular компонент в template -->
</div>
```

### Стили

Стили для секций находятся в `home.component.scss`. При добавлении новых классов не забудьте добавить стили:

```scss
.new-section {
  padding: 80px 0;
  background: $color-bg;
}
```

---

## 📚 Связанные файлы

- `home.component.html` - основной template (использует данные из конфига)
- `home.component.scss` - стили для всех секций
- `home.component.ts` - импортирует данные из конфига
- `components/` - изолированные компоненты (review-methodology, evaluation-criteria)

---

## 🎨 Паттерн использования

```typescript
// 1. Создаем интерфейс
export interface HomeSection {
  id: string;
  html: string;
}

// 2. Экспортируем данные
export const homePageContent: HomeSection[] = [
  { id: 'section1', html: '...' }
];

// 3. Импортируем в компонент
import { homePageContent } from './home-content.config';

// 4. Используем в template через innerHTML
<div [innerHTML]="section.html"></div>
```

---

## 🔄 Миграция с других страниц

Чтобы вынести контент других страниц в конфиг:

1. Создайте файл `page-name-content.config.ts`
2. Скопируйте структуру из `home-content.config.ts`
3. Перенесите HTML из template в массив секций
4. Импортируйте в компонент
5. Используйте через `[innerHTML]`

Готово! 🎉
