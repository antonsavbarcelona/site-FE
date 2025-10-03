# SEO Checklist для Home Page

## ✅ Что уже сделано

### 1. Техническая база
- ✅ **lang="en-GB"** - установлен британский английский
- ✅ **Canonical URL** - динамически добавляется через SeoService
- ✅ **Meta title** (60 символов) - "Tokenoversity — Your Complete Crypto Guide for the UK"
- ✅ **Meta description** (157 символов) - оптимизирована под UK-аудиторию
- ✅ **Meta keywords** - добавлены релевантные ключевые слова

### 2. Семантическая разметка
- ✅ **WebSite JSON-LD** - добавлена схема сайта с SearchAction
- ✅ **Organization JSON-LD** - добавлена информация об организации
- ✅ **ItemList JSON-LD** - список обзоров криптовалют (BTC, ETH, SOL)
- ✅ **Один H1** - "Tokenoversity — Your Complete Crypto Guide" в hero
- ✅ **Иерархия H2/H3** - соблюдена в секциях

### 3. Open Graph и Twitter Cards
- ✅ **og:title** - динамически устанавливается
- ✅ **og:description** - динамически устанавливается
- ✅ **og:image** (1200x630) - поддержка через SeoService
- ✅ **og:type** = "website"
- ✅ **og:url** - canonical URL
- ✅ **twitter:card** = "summary_large_image"
- ✅ **twitter:title** - дублирует og:title
- ✅ **twitter:description** - дублирует og:description
- ✅ **twitter:image** - дублирует og:image

### 4. Accessibility и UX
- ✅ **Alt-теги на изображениях** - добавлены (кроме декоративных с aria-hidden)
- ✅ **Внутренние ссылки** - hero CTA, stats, секции ведут на правильные страницы
- ✅ **Семантические теги** - используются <section>, <article>, itemscope

---

## 🔧 Что нужно доделать

### 1. Создать robots.txt
Создай файл `src/robots.txt`:

```txt
User-agent: *
Allow: /

# Sitemap
Sitemap: https://tokenoversity.com/sitemap.xml

# Crawl-delay (optional)
Crawl-delay: 0
```

### 2. Создать sitemap.xml
Создай файл `src/sitemap.xml` или настрой генерацию:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tokenoversity.com/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tokenoversity.com/best-crypto-exchange-uk</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Добавь остальные страницы -->
</urlset>
```

### 3. Добавить изображения
Создай эти изображения:
- `/images/og-home.webp` (1200x630px) - для Open Graph
- `/images/og-default.webp` (1200x630px) - дефолтное изображение
- `/images/logo.svg` - логотип для Organization schema

### 4. Security Headers (настраивается на сервере)
В твоем `angular.json` или на сервере (nginx/Apache) добавь:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 5. Performance оптимизации

#### В angular.json добавь оптимизации:
```json
"configurations": {
  "production": {
    "optimization": {
      "scripts": true,
      "styles": {
        "minify": true,
        "inlineCritical": true
      },
      "fonts": {
        "inline": true
      }
    },
    "buildOptimizer": true,
    "sourceMap": false
  }
}
```

#### Добавь preload для критичных ресурсов
В `index.html` после тега `<base>`:
```html
<!-- Preload hero image -->
<link rel="preload" as="image" href="/images/hero-bg.webp" fetchpriority="high">
```

### 6. Lighthouse CI (автопроверка)
Создай файл `.lighthouserc.js`:

```javascript
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4200/'],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

Запуск: `npm install -g @lhci/cli && lhci autorun`

---

## 🎯 Целевые метрики

### Core Web Vitals
- ✅ **LCP** (Largest Contentful Paint) < 2.5s
  - Hero title должен загрузиться быстро
  - Используй `fetchpriority="high"` на hero-изображении
  
- ✅ **CLS** (Cumulative Layout Shift) < 0.1
  - Все `<img>` должны иметь `width` и `height`
  - Резервируй место под динамический контент

- ✅ **INP** (Interaction to Next Paint) < 200ms
  - Оптимизируй JS-бандлы
  - Используй lazy loading для некритичных компонентов

- ✅ **TTFB** (Time to First Byte) < 0.8s
  - Настрой SSR (Server-Side Rendering)
  - Используй CDN

### Lighthouse Score
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

---

## 🔍 Инструменты для проверки

1. **Google Search Console** - проверь индексацию и ошибки
2. **PageSpeed Insights** - https://pagespeed.web.dev/
3. **Google Rich Results Test** - https://search.google.com/test/rich-results
4. **Schema.org Validator** - https://validator.schema.org/
5. **Security Headers Check** - https://securityheaders.com/
6. **Lighthouse CI** - автоматизированные проверки в CI/CD

---

## 📋 Быстрый чек-лист перед деплоем

- [ ] `robots.txt` создан и доступен
- [ ] `sitemap.xml` создан и включает home
- [ ] Все изображения имеют `alt` (или `aria-hidden` для декоративных)
- [ ] Все изображения имеют `width` и `height`
- [ ] OG-изображение существует (1200x630px)
- [ ] JSON-LD валидируется без ошибок
- [ ] Canonical URL указывает на правильный адрес
- [ ] Нет дублирующихся H1
- [ ] Security headers настроены на сервере
- [ ] Lighthouse score > 90 на всех категориях
- [ ] Страница открывается за < 3 секунды

---

## 🚀 Автоматизация проверок

Создай npm-скрипт в `package.json`:

```json
"scripts": {
  "seo:check": "node scripts/seo-check.js",
  "lighthouse": "lhci autorun",
  "test:seo": "npm run seo:check && npm run lighthouse"
}
```

Создай `scripts/seo-check.js`:

```javascript
const fs = require('fs');
const { JSDOM } = require('jsdom');

// Проверка HTML
const html = fs.readFileSync('dist/index.html', 'utf-8');
const dom = new JSDOM(html);
const doc = dom.window.document;

// Проверки
const checks = {
  'Canonical': !!doc.querySelector('link[rel="canonical"]'),
  'Meta description': !!doc.querySelector('meta[name="description"]'),
  'OG tags': !!doc.querySelector('meta[property^="og:"]'),
  'JSON-LD': !!doc.querySelector('script[type="application/ld+json"]'),
  'Single H1': doc.querySelectorAll('h1').length === 1,
  'Alt tags': Array.from(doc.querySelectorAll('img:not([aria-hidden])')).every(img => img.alt)
};

console.log('SEO Checks:', checks);
process.exit(Object.values(checks).every(v => v) ? 0 : 1);
```

---

## 💡 Дополнительные рекомендации

1. **Добавь breadcrumbs** (хлебные крошки) на всех страницах кроме home
2. **Настрой 404-страницу** с хорошим UX и внутренними ссылками
3. **Добавь structured data для FAQ** если будет раздел FAQ
4. **Используй WebP** для всех изображений (уже используется ✅)
5. **Настрой preconnect** для внешних ресурсов (шрифты, CDN)
6. **Добавь Service Worker** для offline-режима (PWA)

---

## 📊 Мониторинг после запуска

1. Google Search Console - отслеживай позиции и ошибки
2. Google Analytics 4 - анализируй поведение пользователей
3. Lighthouse CI в GitHub Actions - автоматические проверки при деплое
4. Sentry / LogRocket - мониторинг ошибок и производительности
