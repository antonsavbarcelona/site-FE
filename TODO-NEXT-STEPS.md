# 🎯 Следующие шаги - SEO

## 🔥 СРОЧНО (перед деплоем)

### 1. Создать 3 изображения
```
public/images/og-home.webp       (1200x630px)
public/images/og-default.webp    (1200x630px)  
public/images/logo.svg
```

### 2. Проверить build
```bash
npm run build:prod
npm run seo:check
```

### 3. Настроить Security Headers на сервере
См. `SEO-CHECKLIST-HOME.md` → раздел Security Headers

---

## 📅 ПОТОМ

### 4. Добавить SEO на страницы:
- `/best-crypto-exchange-uk`
- `/kraken-review`
- `/guides`, `/coins`, `/security`

### 5. Google Search Console
- Зарегистрироваться
- Отправить sitemap.xml
- Мониторить индексацию

### 6. SSR (опционально)
```bash
ng add @angular/ssr
```

---

## 📚 Документация
- `CHANGES.md` - что было сделано
- `SEO-CHECKLIST-HOME.md` - полный чек-лист
- `docs/SEO-SETUP.md` - краткая инструкция

🚀 **Всё готово! Удачи!**
