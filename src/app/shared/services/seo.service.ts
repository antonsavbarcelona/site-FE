import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

export interface JsonLdSchema {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseUrl = 'https://tokenoversity.com';
  private readonly siteName = 'Tokenoversity';
  private readonly defaultImage = '/images/og-default.webp';

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Устанавливает все SEO-теги для страницы
   */
  setPageSeo(config: SeoConfig): void {
    // Title
    this.title.setTitle(config.title);

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Canonical URL
    const canonicalUrl = config.url || this.baseUrl;
    this.updateCanonical(canonicalUrl);

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:image', content: this.getFullImageUrl(config.image) });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.getFullImageUrl(config.image) });

    // Article-specific tags
    if (config.type === 'article') {
      if (config.author) {
        this.meta.updateTag({ property: 'article:author', content: config.author });
      }
      if (config.publishedTime) {
        this.meta.updateTag({ property: 'article:published_time', content: config.publishedTime });
      }
      if (config.modifiedTime) {
        this.meta.updateTag({ property: 'article:modified_time', content: config.modifiedTime });
      }
      if (config.section) {
        this.meta.updateTag({ property: 'article:section', content: config.section });
      }
    }
  }

  /**
   * Добавляет JSON-LD схему на страницу
   */
  addJsonLd(schema: JsonLdSchema | JsonLdSchema[]): void {
    const schemas = Array.isArray(schema) ? schema : [schema];
    
    schemas.forEach((s, index) => {
      const scriptId = `json-ld-${index}`;
      let script = this.document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = this.document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        this.document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(s);
    });
  }

  /**
   * Удаляет все JSON-LD схемы
   */
  removeJsonLd(): void {
    const scripts = this.document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => script.remove());
  }

  /**
   * Обновляет canonical URL
   */
  private updateCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    
    link.setAttribute('href', url);
  }

  /**
   * Возвращает полный URL изображения
   */
  private getFullImageUrl(image?: string): string {
    const imageUrl = image || this.defaultImage;
    return imageUrl.startsWith('http') ? imageUrl : `${this.baseUrl}${imageUrl}`;
  }

  /**
   * Создает схему WebSite
   */
  createWebSiteSchema(): JsonLdSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': this.siteName,
      'url': this.baseUrl,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  /**
   * Создает схему Organization
   */
  createOrganizationSchema(): JsonLdSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': this.siteName,
      'url': this.baseUrl,
      'logo': `${this.baseUrl}/images/logo.svg`,
      'sameAs': [
        // Добавь социальные сети если есть
      ]
    };
  }

  /**
   * Создает схему BreadcrumbList
   */
  createBreadcrumbSchema(items: Array<{ name: string; url: string }>): JsonLdSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': `${this.baseUrl}${item.url}`
      }))
    };
  }

  /**
   * Создает схему Article
   */
  createArticleSchema(config: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: string;
    url: string;
  }): JsonLdSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': config.headline,
      'description': config.description,
      'image': this.getFullImageUrl(config.image),
      'datePublished': config.datePublished,
      'dateModified': config.dateModified,
      'author': {
        '@type': 'Person',
        'name': config.author
      },
      'publisher': {
        '@type': 'Organization',
        'name': this.siteName,
        'logo': {
          '@type': 'ImageObject',
          'url': `${this.baseUrl}/images/logo.svg`
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `${this.baseUrl}${config.url}`
      }
    };
  }

  /**
   * Создает схему ItemList для списка статей/обзоров
   */
  createItemListSchema(items: Array<{ name: string; url: string; image?: string }>): JsonLdSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `${this.baseUrl}${item.url}`,
        'name': item.name,
        ...(item.image && { 'image': this.getFullImageUrl(item.image) })
      }))
    };
  }
}
