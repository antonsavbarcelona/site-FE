module.exports = {
  ci: {
    collect: {
      // URL для тестирования (localhost или production)
      url: [
        'http://localhost:4200/',
        'http://localhost:4200/best-crypto-exchange-uk',
        'http://localhost:4200/guides',
        'http://localhost:4200/coins',
        'http://localhost:4200/security'
      ],
      // Количество прогонов для усреднения результатов
      numberOfRuns: 3,
      // Настройки для Chrome
      settings: {
        preset: 'desktop', // или 'mobile'
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1
        },
        // Эмуляция устройства
        emulatedFormFactor: 'desktop',
        // Таймауты
        maxWaitForLoad: 45000,
        // Блокировка рекламы и трекеров для честных результатов
        blockedUrlPatterns: [
          '**/google-analytics.com/**',
          '**/googletagmanager.com/**',
          '**/facebook.com/**',
          '**/doubleclick.net/**'
        ]
      }
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Performance
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        'speed-index': ['warn', { maxNumericValue: 3000 }],

        // Accessibility
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'link-name': 'error',
        'meta-viewport': 'error',

        // Best Practices
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'errors-in-console': 'warn',
        'no-vulnerable-libraries': 'error',
        'is-on-https': 'off', // Отключено для localhost

        // SEO
        'categories:seo': ['error', { minScore: 0.95 }],
        'document-title': 'error',
        'meta-description': 'error',
        'http-status-code': 'error',
        'link-text': 'error',
        'crawlable-anchors': 'error',
        'robots-txt': 'warn',
        'canonical': 'error',
        'hreflang': 'off',
        'font-size': 'error',
        'tap-targets': 'error',

        // Дополнительные важные метрики
        'uses-responsive-images': 'warn',
        'offscreen-images': 'warn',
        'uses-optimized-images': 'warn',
        'uses-text-compression': 'warn',
        'uses-rel-preconnect': 'warn',
        'efficient-animated-content': 'warn',
        'duplicated-javascript': 'warn',
        'legacy-javascript': 'warn',
        'unused-css-rules': 'warn',
        'unused-javascript': 'warn',
        'modern-image-formats': 'warn',
        'uses-long-cache-ttl': 'off', // Настраивается на сервере
        'uses-http2': 'off' // Настраивается на сервере
      }
    },
    upload: {
      // Для локального просмотра результатов
      target: 'temporary-public-storage',
      // Или сохранение в файл
      // target: 'filesystem',
      // outputDir: './lighthouse-results'
    },
    server: {
      // Если нужно запустить локальный сервер перед тестами
      // command: 'npm run start',
      // port: 4200,
      // wait-for-it
      // awaitCommand: 'wait-on http://localhost:4200'
    }
  }
};
