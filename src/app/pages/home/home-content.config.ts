/**
 * Home Page Content Configuration
 * Вся верстка вынесена в конфиг для удобства редактирования
 */

export interface HomeSection {
  id: string;
  type: 'html' | 'component';
  html?: string;
  component?: string; // имя компонента для динамического рендеринга
  data?: any;
}

export const homePageContent: HomeSection[] = [
  // Hero Section
  {
    id: 'hero',
    type: 'html',
    html: `
      <section class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">Tokenoversity — Your Complete Crypto Guide</h1>
            <p class="hero-description">
              Independent reviews, step-by-step guides, and safety basics. Clear, evergreen, and jargon-free.
            </p>

            <div class="hero-cta">
              <app-button-primary text="See Best Exchange for the UK →" link="/best-crypto-exchange-uk"></app-button-primary>
              <app-button-secondary text="Explore Guides" color="gray" link="/guides"></app-button-secondary>
            </div>
          </div>

          <div class="stats">
            <a routerLink="/best-crypto-exchange-uk" class="stat-item">
              <span class="stat-number">#1 Exchange Pick (UK)</span>
              <span class="stat-label">Kraken — tested & explained</span>
            </a>
            <a routerLink="/guides" class="stat-item">
              <span class="stat-number">Step-by-Step Guides</span>
              <span class="stat-label">From sign-up to first buy</span>
            </a>
            <a routerLink="/coins" class="stat-item">
              <span class="stat-number">Coin Reviews & Fundamentals</span>
              <span class="stat-label">Pros, risks & use cases</span>
            </a>
            <a routerLink="/security" class="stat-item">
              <span class="stat-number">Security & Taxes</span>
              <span class="stat-label">Evergreen guides to stay safe</span>
            </a>
          </div>
        </div>
      </section>
    `
  },

  // Test Large Cards Section
  {
    id: 'test-large-cards',
    type: 'component',
    component: 'test-large-cards'
  },

  // News Section
  {
    id: 'news-section',
    type: 'component',
    component: 'news-section'
  },

  // Crypto Knowledge Section
  {
    id: 'crypto-knowledge',
    type: 'component',
    component: 'crypto-knowledge'
  },

  // Security & Taxes Section
  {
    id: 'security-taxes',
    type: 'component',
    component: 'security-taxes'
  },

  // Review Methodology
  {
    id: 'review-methodology',
    type: 'component',
    component: 'review-methodology'
  },

  // Evaluation Criteria
  {
    id: 'evaluation-criteria',
    type: 'component',
    component: 'evaluation-criteria'
  }
];

// Данные для карточек статей
export const testLargeArticles = [
  {
    title: 'Kraken Review 2025 — Why It\'s Our #1 Pick',
    description: 'Security, fees and deposits explained. Clear pros & cons for beginners.',
    category: 'REVIEW',
    date: 'Updated Jun 29, 2025',
    readTime: '6–8 min read',
    routerLink: '/exchanges/kraken-review',
    primaryCta: 'Open Kraken Account →',
    primaryCtaLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_block&utm_content=review_btn',
    secondaryCta: 'Read full review',
    secondaryCtaLink: '/exchanges/kraken-review',
    imageUrl: '/images/kraken/kraken-preview-card.webp',
    icon: '🔐'
  },
  {
    title: 'Best Exchange for the UK — Our #1 Pick (Kraken)',
    description: 'Independently tested deposits, fees and safety. See why we recommend Kraken for UK beginners.',
    category: 'TOP PICK',
    date: 'Updated Jun 29, 2025',
    readTime: '4–6 min read',
    routerLink: '/best-crypto-exchange-uk',
    primaryCta: 'See Best Exchange →',
    primaryCtaLink: '/best-crypto-exchange-uk',
    secondaryCta: 'Start on Kraken →',
    secondaryCtaLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_top_pick&utm_content=card_btn',
    imageUrl: '/images/home/best-exchange-card-preview.webp',
    icon: '🏆'
  }
];

// Данные для новостной секции
export const newsData = {
  sectionTitle: 'How-to Guides for Beginners',
  sectionDescription: 'Short, practical steps for your first buy and safe setup.',
  layout: 'featured-left' as const,
  featuredItem: {
    title: 'How to Deposit on Kraken — Step‑by‑Step',
    description: 'Create account → Verify → Deposit (SEPA/Card) → First buy — safely.',
    category: 'GUIDE',
    date: 'Updated Jun 29, 2025',
    readTime: '5–7 min read',
    routerLink: '/guides/how-to-deposit-kraken',
    affiliateLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_howto&utm_content=deposit_tile_btn',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '₿'
  },
  regularItems: [
    {
      title: 'How to Buy ETH (UK)',
      category: 'Guide',
      date: 'Jun 29, 2025',
      routerLink: '/guides/how-to-buy-eth-uk'
    },
    {
      title: 'How to Buy BTC (UK)',
      category: 'Guide',
      date: 'Jun 29, 2025',
      routerLink: '/guides/how-to-buy-btc-uk'
    },
    {
      title: 'Withdraw to a Hardware Wallet',
      category: 'Guide',
      date: 'Jun 29, 2025',
      routerLink: '/guides/withdraw-hardware-wallet'
    }
  ]
};

// Данные для Coin Reviews
export const cryptoKnowledgeReviews = [
  {
    id: 1,
    title: 'Bitcoin Review: The Original Cryptocurrency',
    category: 'Cryptocurrency',
    date: 'Jan 15, 2025',
    readTime: '6–8 min read',
    author: 'Crypto Team',
    icon: '₿',
    label: 'REVIEW',
    theme: 'light' as const,
    link: '/coins/bitcoin-review',
    buttonText: 'Read Review',
    imageUrl: '/images/home/BTC-card-article-preview.webp'
  },
  {
    id: 2,
    title: 'Ethereum Review: Smart-Contract Platform',
    category: 'Cryptocurrency',
    date: 'Jan 10, 2025',
    readTime: '6–8 min read',
    author: 'Crypto Team',
    icon: 'Ξ',
    label: 'REVIEW',
    theme: 'light' as const,
    link: '/coins/ethereum-review',
    buttonText: 'Read Review',
    imageUrl: '/images/home/ETH-card-article-preview.webp'
  },
  {
    id: 3,
    title: 'Solana Review: High-Performance Blockchain',
    category: 'Cryptocurrency',
    date: 'Jan 5, 2025',
    readTime: '5–7 min read',
    author: 'Crypto Team',
    icon: '◎',
    label: 'REVIEW',
    theme: 'light' as const,
    link: '/coins/solana-review',
    buttonText: 'Read Review',
    imageUrl: '/images/home/SOL-card-article-preview.webp'
  }
];

// Данные для Security & Taxes
export const securityTaxesReviews = [
  {
    id: 4,
    title: 'Avoid Common Crypto Scams (2025)',
    category: 'Security',
    date: 'Jun 30, 2025',
    readTime: '6–8 min read',
    author: 'Crypto Team',
    icon: '🛡️',
    label: 'SECURITY',
    theme: 'light' as const,
    link: '/security/crypto-risks',
    buttonText: 'Read Guide',
    teaser: 'Red flags, fake support, phishing and "too-good-to-be-true" yields — how to verify links, wallets and apps.',
    imageUrl: '/images/home/security-avoid-scams-article-preview.webp'
  },
  {
    id: 5,
    title: 'UK Crypto Taxes — 2025 Basics',
    category: 'Taxes',
    date: 'Jun 30, 2025',
    readTime: '7–9 min read',
    author: 'Crypto Team',
    icon: '💼',
    label: 'TAXES',
    theme: 'light' as const,
    link: '/security/uk-crypto-tax',
    buttonText: 'Read Guide',
    teaser: 'Income vs capital gains, HMRC rules, allowances, record-keeping and simple examples for beginners.',
    imageUrl: '/images/home/security-taxes-explaining-article-preview.webp'
  }
];
