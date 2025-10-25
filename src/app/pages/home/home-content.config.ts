/**
 * Home Page Content Configuration
 * All content extracted for i18n support
 */

// ============================================
// SECTION CONFIGURATION
// ============================================
export type SectionType =
  | 'hero'
  | 'top-picks'
  | 'guides'
  | 'coin-reviews'
  | 'security-taxes'
  | 'review-methodology'
  | 'evaluation-criteria';

export interface PageSection {
  type: SectionType;
  enabled: boolean;
  order: number;
}

export const homePageSections: PageSection[] = [
  { type: 'hero', enabled: true, order: 1 },
  { type: 'top-picks', enabled: true, order: 2 },
  { type: 'guides', enabled: true, order: 3 },
  { type: 'coin-reviews', enabled: true, order: 4 },
  { type: 'security-taxes', enabled: true, order: 5 },
  { type: 'review-methodology', enabled: true, order: 6 },
  { type: 'evaluation-criteria', enabled: true, order: 7 }
];

// ============================================
// CONTENT INTERFACES
// ============================================
export interface HeroContent {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
  stats: Array<{
    number: string;
    label: string;
    link: string;
  }>;
}

export interface SectionHeader {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface LargeArticle {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  routerLink: string;
  primaryCta: string;
  primaryCtaLink: string;
  primaryCtaExternal: boolean;
  secondaryCta: string;
  secondaryCtaLink: string;
  secondaryCtaExternal: boolean;
  imageUrl: string;
  icon: string;
}

export interface NewsSection {
  sectionTitle: string;
  sectionDescription: string;
  layout: 'featured-left' | 'featured-right';
  featuredItem: {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    routerLink: string;
    affiliateLink: string;
    gradient: string;
    icon: string;
    buttonText: string;
  };
  regularItems: Array<{
    title: string;
    category: string;
    date: string;
    routerLink: string;
    buttonText?: string;
  }>;
}

export interface ReviewCard {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  icon: string;
  label: string;
  theme: 'light' | 'dark';
  link: string;
  buttonText: string;
  imageUrl: string;
  teaser?: string;
}

// ============================================
// HERO SECTION
// ============================================
export const heroContent: HeroContent = {
  title: 'Tokenoversity — Your Complete Crypto Guide',
  description: 'Independent reviews, step-by-step guides, and safety basics. Clear, evergreen, and jargon-free.',
  primaryCta: {
    text: 'See Best Exchange for the UK →',
    link: '/best-crypto-exchange-uk'
  },
  secondaryCta: {
    text: 'Explore Guides',
    link: '/guides'
  },
  stats: [
    {
      number: '#1 Exchange Pick (UK)',
      label: 'Kraken — tested & explained',
      link: '/best-crypto-exchange-uk'
    },
    {
      number: 'Step-by-Step Guides',
      label: 'From sign-up to first buy',
      link: '/guides'
    },
    {
      number: 'Coin Reviews & Fundamentals',
      label: 'Pros, risks & use cases',
      link: '/coins'
    },
    {
      number: 'Security & Taxes',
      label: 'Evergreen guides to stay safe',
      link: '/security'
    }
  ]
};

// ============================================
// SECTIONS HEADERS
// ============================================
export const sectionsHeaders = {
  startHere: {
    title: 'Start Here — Review & Top Pick',
  },
  coinReviews: {
    title: 'Coin Reviews & Fundamentals',
    subtitle: 'Plain-English reviews of Bitcoin, Ethereum and Solana — pros, risks, and how to get exposure in the UK.',
    ctaText: 'Explore All Coin Reviews →',
    ctaLink: '/coins'
  },
  securityTaxes: {
    title: 'Security & Taxes',
    subtitle: 'Evergreen guides to stay safe and compliant.',
    ctaText: 'All security & taxes →',
    ctaLink: '/security'
  }
};

// ============================================
// LARGE ARTICLES (Top picks)
// ============================================
export const testLargeArticles: LargeArticle[] = [
  {
    title: 'Kraken Review 2025 — Why It\'s Our #1 Pick',
    description: 'Security, fees and deposits explained. Clear pros & cons for beginners.',
    category: 'REVIEW',
    date: 'Updated Jun 29, 2025',
    readTime: '6–8 min read',
    routerLink: '/exchanges/kraken-review',
    primaryCta: 'Open Kraken Account →',
    primaryCtaLink: 'https://www.kraken.com/es-es',
    primaryCtaExternal: true,
    secondaryCta: 'Read full review',
    secondaryCtaLink: '/exchanges/kraken-review',
    secondaryCtaExternal: false,
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
    primaryCtaExternal: false,
    secondaryCta: 'Start on Kraken →',
    secondaryCtaLink: 'https://www.kraken.com/es-es',
    secondaryCtaExternal: true,
    imageUrl: '/images/home/best-exchange-card-preview.webp',
    icon: '🏆'
  }
];

// ============================================
// NEWS/GUIDES SECTION
// ============================================
export const newsData: NewsSection = {
  sectionTitle: 'How-to Guides for Beginners',
  sectionDescription: 'Short, practical steps for your first buy and safe setup.',
  layout: 'featured-left',
  featuredItem: {
    title: 'How to Deposit on Kraken — Step‑by‑Step',
    description: 'Create account → Verify → Deposit (SEPA/Card) → First buy — safely.',
    category: 'GUIDE',
    date: 'Updated Jun 29, 2025',
    readTime: '5–7 min read',
    routerLink: '/guides/how-to-buy-eth-uk',
    affiliateLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_howto&utm_content=deposit_tile_btn',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '₿',
    buttonText: 'See the steps (not active)'
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
      routerLink: '/guides/how-to-buy-btc-uk',
      buttonText: 'Read Guide (not active)'
    },
    {
      title: 'Withdraw to a Hardware Wallet',
      category: 'Guide',
      date: 'Jun 29, 2025',
      routerLink: '/guides/withdraw-hardware-wallet',
      buttonText: 'Read Guide (not active)'
    }
  ]
};

// ============================================
// COIN REVIEWS
// ============================================
export const cryptoKnowledgeReviews: ReviewCard[] = [
  {
    id: 1,
    title: 'Bitcoin Review: The Original Cryptocurrency',
    category: 'Cryptocurrency',
    date: 'Jan 15, 2025',
    readTime: '6–8 min read',
    author: 'Crypto Team',
    icon: '₿',
    label: 'REVIEW',
    theme: 'light',
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
    theme: 'light',
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
    theme: 'light',
    link: '/coins/solana-review',
    buttonText: 'Read Review (not active)',
    imageUrl: '/images/home/SOL-card-article-preview.webp'
  }
];

// ============================================
// SECURITY & TAXES
// ============================================
export const securityTaxesReviews: ReviewCard[] = [
  {
    id: 4,
    title: 'Avoid Common Crypto Scams (2025)',
    category: 'Security',
    date: 'Jun 30, 2025',
    readTime: '6–8 min read',
    author: 'Crypto Team',
    icon: '🛡️',
    label: 'SECURITY',
    theme: 'light',
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
    theme: 'light',
    link: '/security/uk-crypto-tax',
    buttonText: 'Read Guide',
    teaser: 'Income vs capital gains, HMRC rules, allowances, record-keeping and simple examples for beginners.',
    imageUrl: '/images/home/security-taxes-explaining-article-preview.webp'
  }
];
