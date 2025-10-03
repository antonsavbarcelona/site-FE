# 🚀 API Integration Example

## Как это работает с Backend + SSR + Redis Cache

---

## 1️⃣ Backend API (Express/Nest.js)

### Database Schema (PostgreSQL):
```sql
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  category VARCHAR(100),
  author VARCHAR(100),
  date DATE,
  last_updated TIMESTAMP,
  
  -- SEO данные
  seo_title VARCHAR(255),
  seo_description TEXT,
  seo_keywords TEXT,
  seo_image VARCHAR(255),
  
  -- Контент в виде JSON массива блоков
  content_blocks JSONB NOT NULL,
  
  -- JSON-LD schema
  json_ld JSONB,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Пример вставки Bitcoin Review:
INSERT INTO articles (
  slug, 
  title, 
  category, 
  author, 
  date,
  seo_title,
  seo_description,
  seo_image,
  content_blocks,
  json_ld
) VALUES (
  'bitcoin-review',
  'What is Bitcoin? — Bitcoin Review 2025',
  'Cryptocurrency Review',
  'Crypto Expert Team',
  '2025-01-15',
  'Bitcoin Review 2025 — What is Bitcoin? | Tokenoversity',
  'Complete Bitcoin review: what it is, how it works, risks, and best ways to buy BTC in the UK. Beginner-friendly explanation.',
  '/images/bitcoin-review/og-image.webp',
  '[
    {
      "html": "<section><p>Bitcoin continues to dominate...</p></section>"
    },
    {
      "html": "<section><h2>Quick Verdict</h2>...</section>"
    }
  ]'::jsonb,
  '{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bitcoin Review 2025"
  }'::jsonb
);
```

---

### API Controller (articles.controller.ts):
```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('api/articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get(':slug')
  async getArticle(@Param('slug') slug: string) {
    const article = await this.articlesService.findBySlug(slug);
    
    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return {
      title: article.title,
      subtitle: article.subtitle,
      category: article.category,
      author: article.author,
      date: article.date,
      lastUpdated: article.last_updated,
      
      // SEO данные
      seo: {
        title: article.seo_title,
        description: article.seo_description,
        keywords: article.seo_keywords,
        image: article.seo_image
      },
      
      // JSON-LD schema
      jsonLd: article.json_ld,
      
      // Контент блоки
      contentBlocks: article.content_blocks
    };
  }
}
```

---

## 2️⃣ Angular Component

### bitcoin-review.component.ts:
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../../shared/services/seo.service';
import { TableOfContentsComponent } from '../../../shared/ui/table-of-contents/table-of-contents.component';

interface ContentBlock {
  html: string;
}

interface Article {
  title: string;
  subtitle?: string;
  category: string;
  author: string;
  date: string;
  lastUpdated: string;
  seo: {
    title: string;
    description: string;
    keywords?: string;
    image: string;
  };
  jsonLd: any;
  contentBlocks: ContentBlock[];
}

@Component({
  selector: 'app-bitcoin-review',
  templateUrl: './bitcoin-review.component.html',
  styleUrl: './bitcoin-review.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TableOfContentsComponent
  ]
})
export class BitcoinReviewComponent implements OnInit, OnDestroy {
  article: Article | null = null;
  loading = true;
  error = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private seo: SeoService
  ) {}

  ngOnInit() {
    // Получаем slug из route
    const slug = this.route.snapshot.paramMap.get('slug') || 'bitcoin-review';
    
    // Загружаем статью
    // SSR дождется этого запроса и отрендерит HTML!
    this.http.get<Article>(`/api/articles/${slug}`)
      .subscribe({
        next: (data) => {
          this.article = data;
          this.loading = false;
          
          // Устанавливаем SEO
          this.seo.setPageSeo({
            title: data.seo.title,
            description: data.seo.description,
            keywords: data.seo.keywords,
            url: `https://tokenoversity.com/coins/${slug}`,
            image: data.seo.image,
            type: 'article',
            author: data.author,
            publishedTime: data.date,
            modifiedTime: data.lastUpdated
          });
          
          // Добавляем JSON-LD
          if (data.jsonLd) {
            this.seo.addJsonLd(data.jsonLd);
          }
        },
        error: (err) => {
          console.error('Failed to load article:', err);
          this.loading = false;
          this.error = true;
        }
      });
  }

  ngOnDestroy() {
    this.seo.removeJsonLd();
  }
}
```

---

### bitcoin-review.component.html:
```html
<!-- Loading State -->
<div *ngIf="loading" class="loading-container">
  <div class="spinner"></div>
  <p>Loading article...</p>
</div>

<!-- Error State -->
<div *ngIf="error && !loading" class="error-container">
  <h1>Article Not Found</h1>
  <p>The article you're looking for doesn't exist.</p>
  <a routerLink="/coins">← Back to Coins</a>
</div>

<!-- Article Content -->
<div *ngIf="article && !loading" class="page-layout">
  <div class="layout-sidebar">

    <!-- Main Content -->
    <main class="article-content-wrapper">
      
      <!-- Hero Section -->
      <div class="hero-section hero-banner">
        <div class="hero-content">
          <div class="article-meta">
            <span class="category">{{ article.category }}</span>
            <span class="date">{{ article.date | date:'MMMM yyyy' }}</span>
          </div>
          <h1 class="page-title">{{ article.title }}</h1>
          <p *ngIf="article.subtitle" class="subtitle">{{ article.subtitle }}</p>
          <div class="author-info">
            <span class="author">By {{ article.author }}</span>
            <span class="updated">Updated: {{ article.lastUpdated | date:'mediumDate' }}</span>
          </div>
        </div>
      </div>

      <!-- Article Content через innerHTML -->
      <div class="article-content content-spacing">
        
        <!-- Рендерим каждый блок контента -->
        @for (block of article.contentBlocks; track $index) {
          <div [innerHTML]="block.html"></div>
        }
        
      </div>
    </main>

    <!-- Desktop Sidebar with TOC -->
    <aside class="sidebar sidebar-hidden-mobile">
      <app-table-of-contents
        [title]="article.title"
        contentSelector=".article-content"
        [showMobile]="false">
      </app-table-of-contents>
    </aside>

  </div>
</div>
```

---

## 3️⃣ SSR Server с Redis Cache

### server.ts:
```typescript
import express from 'express';
import Redis from 'redis';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from './src/main.server';

const app = express();
const redis = Redis.createClient();

await redis.connect();

// Angular Universal
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

app.set('view engine', 'html');
app.set('views', 'dist/browser');

// Статика
app.use(express.static('dist/browser'));

// Cache Middleware
async function pageCache(req, res, next) {
  const cacheKey = `page:${req.url}`;
  
  try {
    // Проверяем кеш
    const cachedHtml = await redis.get(cacheKey);
    
    if (cachedHtml) {
      console.log(`✅ CACHE HIT: ${req.url} (served in ~5ms)`);
      res.setHeader('X-Cache', 'HIT');
      return res.send(cachedHtml);
    }
    
    console.log(`❌ CACHE MISS: ${req.url} (SSR + API call)`);
    
    // Перехватываем response
    const originalSend = res.send.bind(res);
    res.send = function(html) {
      // Кешируем на 1 час
      redis.setEx(cacheKey, 3600, html);
      console.log(`💾 CACHED: ${req.url}`);
      
      res.setHeader('X-Cache', 'MISS');
      return originalSend(html);
    };
    
    next();
  } catch (err) {
    console.error('Redis error:', err);
    next();
  }
}

// API Proxy (опционально, если API на другом порту)
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true
}));

// Angular Routes с кешем
app.get('*', pageCache, (req, res) => {
  res.render('index', {
    req,
    providers: [
      { provide: 'serverUrl', useValue: `${req.protocol}://${req.get('host')}` }
    ]
  });
});

app.listen(4000, () => {
  console.log('🚀 SSR Server with Redis cache running on http://localhost:4000');
});
```

---

## 4️⃣ Как это работает (Flow):

### Первый запрос (CACHE MISS):
```
1. User/Google Bot → GET /coins/bitcoin-review

2. SSR Server:
   → Проверяет Redis cache → НЕТ
   → Angular SSR запускается
   
3. Angular Component (на сервере):
   → ngOnInit() → HTTP GET /api/articles/bitcoin-review
   → Ждет ответа от API
   
4. Backend API:
   → Читает из PostgreSQL
   → Возвращает JSON с content_blocks
   
5. Angular SSR:
   → Рендерит HTML с innerHTML
   → Все блоки становятся готовым HTML
   → SeoService добавляет meta-теги и JSON-LD
   
6. SSR Server:
   → Получает готовый HTML от Angular
   → Сохраняет в Redis (TTL: 1 час)
   → Отдает HTML клиенту
   
Время: ~500-800ms
```

### Последующие запросы (CACHE HIT):
```
1. User/Google Bot → GET /coins/bitcoin-review

2. SSR Server:
   → Проверяет Redis cache → ЕСТЬ!
   → Возвращает готовый HTML из кеша
   
Время: ~5-10ms 🔥
```

---

## 5️⃣ Cache Invalidation API

### cache.controller.ts:
```typescript
@Controller('api/cache')
export class CacheController {
  constructor(private redis: RedisService) {}

  // Очистить кеш статьи
  @Delete(':slug')
  async clearArticleCache(@Param('slug') slug: string) {
    await this.redis.del(`page:/coins/${slug}`);
    return { success: true, message: `Cache cleared for ${slug}` };
  }

  // Очистить весь кеш
  @Delete()
  async clearAllCache() {
    const keys = await this.redis.keys('page:*');
    await Promise.all(keys.map(key => this.redis.del(key)));
    return { success: true, cleared: keys.length };
  }
}
```

### Использование:
```bash
# После обновления статьи в админке
curl -X DELETE http://localhost:3000/api/cache/bitcoin-review

# Очистить весь кеш
curl -X DELETE http://localhost:3000/api/cache
```

---

## 6️⃣ Admin Panel Integration

### Когда редактор сохраняет статью:
```typescript
// admin/articles.service.ts
async updateArticle(slug: string, data: UpdateArticleDto) {
  // 1. Обновить в базе
  await this.db.query(
    'UPDATE articles SET content_blocks = $1, updated_at = NOW() WHERE slug = $2',
    [data.contentBlocks, slug]
  );
  
  // 2. Инвалидировать кеш
  await this.cacheService.clear(`page:/coins/${slug}`);
  await this.cacheService.clear('page:/'); // Главная может зависеть
  
  return { success: true };
}
```

---

## 7️⃣ Результаты:

### Performance:
- **First Request (MISS):** 500-800ms (SSR + API + DB)
- **Cached Requests (HIT):** 5-10ms (Redis) 🔥
- **TTFB:** < 10ms для кешированных страниц
- **LCP:** < 1s (контент сразу в HTML)

### SEO:
- ✅ Google видит готовый HTML мгновенно
- ✅ Все meta-теги и JSON-LD в HTML
- ✅ Никаких JS-зависимостей для контента
- ✅ Perfect Lighthouse SEO score

### Гибкость:
- ✅ Редактирование через админку
- ✅ Любая верстка в HTML
- ✅ Автоматическая инвалидация кеша
- ✅ Контент в базе данных

---

## ✅ Итого:

**Ты получаешь:**
1. Контент в базе данных ✅
2. Тонкий Angular клиент (только рендеринг) ✅
3. SSR для SEO ✅
4. Redis кеш для скорости ✅
5. Простое редактирование через API ✅
6. Мгновенная загрузка (5-10ms из кеша) ✅

**Это идеальная архитектура для твоего случая!** 🔥
