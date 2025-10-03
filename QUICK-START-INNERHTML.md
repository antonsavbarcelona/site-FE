# ⚡ Quick Start: innerHTML подход с API

## 🎯 Что это:

Вся верстка хранится в базе данных в виде HTML строк.
Angular получает через API и рендерит через `[innerHTML]`.
SSR + Redis кеш = мгновенная загрузка + идеальное SEO.

---

## 🚀 Быстрый старт (5 шагов):

### 1️⃣ Создай конфиг с контентом

```typescript
// article-content.config.ts
export interface ContentBlock {
  html: string;
}

export const articleContent: ContentBlock[] = [
  {
    html: `
      <section>
        <h2>Introduction</h2>
        <p>Your content here...</p>
      </section>
    `
  },
  {
    html: `
      <section>
        <h2>Main Content</h2>
        <p>More content...</p>
      </section>
    `
  }
];
```

### 2️⃣ Создай компонент

```typescript
// article.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface ContentBlock {
  html: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ArticleComponent implements OnInit {
  contentBlocks: ContentBlock[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Загрузка из API (SSR дождется этого!)
    this.http.get<{contentBlocks: ContentBlock[]}>('/api/articles/my-article')
      .subscribe(data => {
        this.contentBlocks = data.contentBlocks;
        this.loading = false;
      });
  }
}
```

### 3️⃣ Создай template

```html
<!-- article.component.html -->
<div *ngIf="loading">Loading...</div>

<div *ngIf="!loading" class="article-content">
  @for (block of contentBlocks; track $index) {
    <div [innerHTML]="block.html"></div>
  }
</div>
```

### 4️⃣ Добавь стили

```scss
// article.component.scss
.article-content {
  ::ng-deep {
    h2 { font-size: 2rem; margin: 2rem 0 1rem; }
    p { line-height: 1.7; margin-bottom: 1rem; }
    ul { padding-left: 2rem; }
    li { margin-bottom: 0.5rem; }
  }
}
```

### 5️⃣ Backend API

```typescript
// articles.controller.ts
@Get(':slug')
async getArticle(@Param('slug') slug: string) {
  const article = await db.query(
    'SELECT content_blocks FROM articles WHERE slug = $1',
    [slug]
  );
  
  return {
    contentBlocks: article.content_blocks
  };
}
```

---

## ✅ Готово!

**Теперь:**
- Angular получает HTML из API
- SSR рендерит на сервере
- Google видит готовый контент
- Redis кеширует результат
- Загрузка за 5-10ms

---

## 🔥 С SSR + Redis Cache:

### server.ts:
```typescript
import express from 'express';
import Redis from 'redis';

const app = express();
const redis = Redis.createClient();

// Cache middleware
app.get('*', async (req, res, next) => {
  const cached = await redis.get(`page:${req.url}`);
  if (cached) return res.send(cached); // 5ms!
  
  // Перехват response
  const originalSend = res.send.bind(res);
  res.send = (html) => {
    redis.setEx(`page:${req.url}`, 3600, html); // Кеш 1 час
    return originalSend(html);
  };
  next();
});

// Angular SSR
app.get('*', (req, res) => {
  res.render('index', { req });
});
```

---

## 📊 Результат:

| Метрика | Значение |
|---------|----------|
| **TTFB (первый запрос)** | 500-800ms |
| **TTFB (из кеша)** | 5-10ms 🔥 |
| **LCP** | < 1s |
| **CLS** | < 0.1 |
| **SEO Score** | 100/100 |

---

## 💡 Что дальше:

1. Добавь SEO-теги из API
2. Настрой cache invalidation
3. Создай админку для редактирования
4. Добавь версионирование контента

---

**Готово! Теперь у тебя тонкий клиент + контент в базе + идеальное SEO!** 🚀
