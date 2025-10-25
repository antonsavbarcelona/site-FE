import { SeoConfig } from '../../shared/services/seo.service';

/**
 * SEO configuration for the home page
 */
export const homeSeoConfig: SeoConfig = {
  title: 'Tokenoversity — Your Complete Crypto Guide for the UK',
  description: 'Independent crypto exchange reviews, step-by-step guides, and security basics. Clear, evergreen, and jargon-free resources for UK beginners.',
  keywords: 'crypto guide, cryptocurrency exchange, UK crypto, bitcoin guide, ethereum guide, crypto security, crypto taxes UK',
  image: '/images/og-home.webp',
  url: 'https://tokenoversity.com/',
  type: 'website'
};

/**
 * JSON-LD schema items for cryptocurrency reviews
 */
export const homeSchemaItems = [
  {
    name: 'Bitcoin Review',
    url: '/coins/bitcoin-review',
    image: '/images/home/BTC-card-article-preview.webp'
  },
  {
    name: 'Ethereum Review',
    url: '/coins/ethereum-review',
    image: '/images/home/ETH-card-article-preview.webp'
  },
  {
    name: 'Solana Review',
    url: '/coins/solana-review',
    image: '/images/home/SOL-card-article-preview.webp'
  }
];
