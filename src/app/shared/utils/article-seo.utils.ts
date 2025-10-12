import { SeoService } from '../services/seo.service';
import { BreadcrumbItem } from '../ui/breadcrumbs/breadcrumbs.component';

/**
 * Конфигурация SEO для статьи
 */
export interface ArticleSeoConfig {
  title: string;                    // ≤ 60 символов
  description: string;               // 140-160 символов
  keywords: string;                  // Ключевые слова через запятую
  image: string;                     // Путь к og:image
  url: string;                       // Относительный URL (например, '/coins/bitcoin-review')
  author: string;                    // Автор статьи
  publishedTime: string;             // ISO 8601 формат (например, '2025-01-15T00:00:00Z')
  modifiedTime: string;              // ISO 8601 формат
  section: string;                   // Категория (например, 'Cryptocurrency Review')
  breadcrumbs?: BreadcrumbItem[];    // Опционально - для breadcrumb schema
}

/**
 * Универсальная функция для настройки SEO статьи
 * Устанавливает все необходимые meta-теги и JSON-LD схемы
 *
 * @param seo - Инстанс SeoService
 * @param config - Конфигурация SEO статьи
 *
 * @example
 * ngOnInit(): void {
 *   setupArticleSeo(this.seo, {
 *     title: 'What is Bitcoin? — Bitcoin Review 2025',
 *     description: 'Comprehensive Bitcoin review...',
 *     keywords: 'bitcoin, btc, cryptocurrency',
 *     image: '/images/bitcoin-review/btc-hero.webp',
 *     url: '/coins/bitcoin-review',
 *     author: 'Crypto Expert Team',
 *     publishedTime: '2025-01-15T00:00:00Z',
 *     modifiedTime: '2025-01-15T00:00:00Z',
 *     section: 'Cryptocurrency Review',
 *     breadcrumbs: [
 *       { label: 'Home', link: '/' },
 *       { label: 'Coins', link: '/coins' },
 *       { label: 'Bitcoin Review', link: '/coins/bitcoin-review' }
 *     ]
 *   });
 * }
 */
export function setupArticleSeo(
  seo: SeoService,
  config: ArticleSeoConfig
): void {
  // Валидация title length
  if (config.title.length > 60) {
    console.warn(`⚠️ SEO Warning: Title too long (${config.title.length} chars). Recommended: ≤ 60`);
  }

  // Валидация description length
  if (config.description.length < 140 || config.description.length > 160) {
    console.warn(`⚠️ SEO Warning: Description length ${config.description.length} chars. Recommended: 140-160`);
  }

  // Установка Page SEO (title, description, og, twitter, canonical, hreflang)
  seo.setPageSeo({
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    image: config.image,
    url: `https://tokenoversity.com${config.url}`,
    type: 'article',
    author: config.author,
    publishedTime: config.publishedTime,
    modifiedTime: config.modifiedTime,
    section: config.section
  });

  // Создание JSON-LD схем
  const schemas: any[] = [
    // 1. Organization - всегда присутствует
    seo.createOrganizationSchema(),

    // 2. Article - основная схема статьи
    seo.createArticleSchema({
      headline: config.title,
      description: config.description,
      image: config.image,
      datePublished: config.publishedTime,
      dateModified: config.modifiedTime,
      author: config.author,
      url: config.url
    })
  ];

  // 3. BreadcrumbList - если есть breadcrumbs
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(
      seo.createBreadcrumbSchema(
        config.breadcrumbs.map(b => ({
          name: b.label,
          url: b.link || ''  // используем link, а не url
        }))
      )
    );
  }

  // Добавление всех схем в DOM
  seo.addJsonLd(schemas);
}
