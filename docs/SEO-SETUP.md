# 🚀 SEO Setup для Tokenoversity - КРАТКАЯ ВЕРСИЯ

## ✅ Что уже сделано

1. **SeoService** (`src/app/shared/services/seo.service.ts`) - готов к использованию
2. **ScrollLockService** (`src/app/shared/services/scroll-lock.service.ts`) - вынесен из header
3. **Home Page** - полностью оптимизирован с SEO, JSON-LD, OG-тегами
4. **robots.txt** и **sitemap.xml** - созданы и настроены
5. **angular.json** - настроены production оптимизации
6. **package.json** - добавлены SEO-скрипты

---

## 🎯 Быстрый старт

### Проверить SEO
```bash
npm run seo:check
```

### Запустить Lighthouse
```bash
npm start  # терминал 1
npm run lighthouse  # терминал 2
```

### Production build
```bash
npm run build:prod
```

---

## 📝 Что нужно доделать

### 1. Создать изображения (ОБЯЗАТЕЛЬНО!)
```
public/images/og-home.webp (1200x630px)
public/images/og-default.webp (1200x630px)
public/images/logo.svg
```

### 2. Настроить Security Headers на сервере
Добавь в nginx конфиг (см. SEO-CHECKLIST-HOME.md)

### 3. Добавить SEO на другие страницы
Используй пример из home.component.ts для guides, coins, security

---

## 💡 Как использовать SeoService

```typescript
// В ngOnInit любого компонента
this.seo.setPageSeo({
  title: 'Твой Title (≤60 символов)',
  description: 'Твое Description (≤160 символов)',
  url: 'https://tokenoversity.com/твой-путь',
  image: '/images/твоя-картинка-og.webp'
});

// Добавить JSON-LD
this.seo.addJsonLd(this.seo.createArticleSchema({...}));

// В ngOnDestroy
this.seo.removeJsonLd();
```

---

## 📊 Целевые метрики

- **LCP** < 2.5s
- **CLS** < 0.1  
- **INP** < 200ms
- **Lighthouse Score** > 90

---

## 🔗 Полезные ссылки

- Полный чек-лист: `SEO-CHECKLIST-HOME.md`
- Конфигурация Lighthouse: `.lighthouserc.js`
- Скрипт проверки: `scripts/seo-check.js`

**Готово! Теперь всё настроено для SEO. Удачи! 🚀**
