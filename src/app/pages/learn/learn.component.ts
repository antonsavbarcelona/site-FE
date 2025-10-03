import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewCardComponent, ReviewCardData } from '../../shared/ui/review-card/review-card.component';
import { ButtonPrimaryComponent } from '../../shared/ui/button-primary/button-primary.component';
import {ButtonSecondaryComponent} from '../../shared/ui/button-secondary/button-secondary.component';
import {CategoryHeroComponent, CategoryHeroData} from '../categories/components/category-hero/category-hero.component';

export interface TopicTile {
  title: string;
  description: string;
  link: string;
  icon: string;
  count: number;
}

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss',
  standalone: true,
  imports: [RouterLink, CategoryHeroComponent, ReviewCardComponent, ButtonPrimaryComponent, ButtonSecondaryComponent]
})
export class LearnComponent {
  // Hero configuration
  heroData: CategoryHeroData = {
    title: 'Learn Crypto —\nClear, Evergreen, Trusted',
    subtitle: 'Plain-English explainers and fundamentals for crypto, DeFi, and security — reviewed quarterly.',
    stats: '24 articles • Updated Jun 2025',
    primaryCta: {
      text: 'Explore topics →',
      link: '#topics'
    },
    secondaryCta: {
      text: 'Beginner path →',
      link: '#beginner-cta'
    },
    backgroundColor: "url('/images/learn/learn-hero.webp') center/cover no-repeat",
    useTextBackground: true
  };

  // Start Here - Beginner articles
  startHereArticles: ReviewCardData[] = [
    {
      id: 1,
      title: 'Bitcoin Review: The Original Cryptocurrency',
      category: 'Cryptocurrency',
      date: 'Jan 15, 2025',
      readTime: '6–8 min read',
      author: 'Crypto Team',
      icon: '₿',
      label: 'Beginner',
      theme: 'light',
      link: '/coins/bitcoin-review',
      buttonText: 'Read explainer',
      teaser: 'The original cryptocurrency explained — how it works, why it matters, and what makes it unique.',
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
      label: 'Beginner',
      theme: 'light',
      link: '/coins/ethereum-review',
      buttonText: 'Read explainer',
      teaser: 'Smart-contract platform explained — apps, DeFi, and programmable money.',
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
      label: 'Beginner',
      theme: 'light',
      link: '/coins/solana-review',
      buttonText: 'Read explainer',
      teaser: 'High-performance blockchain — fast transactions and low fees explained.',
      imageUrl: '/images/home/SOL-card-article-preview.webp'
    }
  ];

  // Topic tiles for exploration
  topicTiles: TopicTile[] = [
    {
      title: 'Fundamentals',
      description: 'Bitcoin, Ethereum, stablecoins and core concepts',
      link: '/learn/fundamentals',
      icon: '🏛️',
      count: 8
    },
    {
      title: 'Technology',
      description: 'Blockchain, consensus, nodes and how it works',
      link: '/learn/technology',
      icon: '⚙️',
      count: 6
    },
    {
      title: 'Investing Basics',
      description: 'Risk management, portfolios and strategy',
      link: '/learn/investing',
      icon: '📈',
      count: 5
    },
    {
      title: 'DeFi',
      description: 'Decentralised finance, yields and protocols',
      link: '/learn/defi',
      icon: '🏦',
      count: 4
    },
    {
      title: 'Security',
      description: 'Wallets, private keys and staying safe',
      link: '/learn/security',
      icon: '🛡️',
      count: 7
    },
    {
      title: 'Glossary',
      description: 'Terms, definitions and crypto vocabulary',
      link: '/learn/glossary',
      icon: '📚',
      count: 12
    }
  ];

  // Featured explainers
  featuredArticles: ReviewCardData[] = [
    {
      id: 4,
      title: 'Avoid Common Crypto Scams (2025)',
      category: 'Security',
      date: 'Jun 30, 2025',
      readTime: '6–8 min read',
      author: 'Crypto Team',
      icon: '🛡️',
      label: 'Guide',
      theme: 'light',
      link: '/security/crypto-scams',
      buttonText: 'Read guide',
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
      label: 'Explainer',
      theme: 'light',
      link: '/security/uk-crypto-tax-basics',
      buttonText: 'Read explainer',
      teaser: 'Income vs capital gains, HMRC rules, allowances, record-keeping and simple examples for beginners.',
      imageUrl: '/images/home/security-taxes-explaining-article-preview.webp'
    },
    {
      id: 6,
      title: 'How to Deposit on Kraken — Step‑by‑Step',
      category: 'Guides',
      date: 'Jun 29, 2025',
      readTime: '5–7 min read',
      author: 'Crypto Team',
      icon: '₿',
      label: 'Guide',
      theme: 'light',
      link: '/guides/how-to-deposit-kraken',
      buttonText: 'Read guide',
      teaser: 'Create account → Verify → Deposit (SEPA/Card) → First buy — safely.'
    }
  ];

  // Latest updates - mix of real articles
  latestArticles: ReviewCardData[] = [
    {
      id: 7,
      title: 'How to Buy ETH (UK)',
      category: 'Guides',
      date: 'Jun 29, 2025',
      readTime: '8–10 min read',
      author: 'Crypto Team',
      icon: 'Ξ',
      label: 'Guide',
      theme: 'light',
      link: '/guides/how-to-buy-eth-uk',
      buttonText: 'Read guide',
      teaser: 'Step-by-step guide to buying Ethereum safely in the UK — from setup to first purchase.'
    },
    {
      id: 8,
      title: 'How to Buy BTC (UK)',
      category: 'Guides',
      date: 'Jun 28, 2025',
      readTime: '9–11 min read',
      author: 'Crypto Team',
      icon: '₿',
      label: 'Guide',
      theme: 'light',
      link: '/guides/how-to-buy-btc-uk',
      buttonText: 'Read guide',
      teaser: 'Complete beginner guide to buying Bitcoin in the UK — exchanges, wallets, and safety.'
    },
    {
      id: 9,
      title: 'Withdraw to a Hardware Wallet',
      category: 'Security',
      date: 'Jun 27, 2025',
      readTime: '7–9 min read',
      author: 'Crypto Team',
      icon: '🔐',
      label: 'Guide',
      theme: 'light',
      link: '/guides/withdraw-hardware-wallet',
      buttonText: 'Read guide',
      teaser: 'How to safely transfer crypto from exchanges to hardware wallets — step by step.'
    },
    {
      id: 10,
      title: 'Kraken Review 2025 — Why It\'s Our #1 Pick',
      category: 'Exchanges',
      date: 'Jun 26, 2025',
      readTime: '8–10 min read',
      author: 'Crypto Team',
      icon: '🏆',
      label: 'Review',
      theme: 'light',
      link: '/exchanges/kraken-review',
      buttonText: 'Read review',
      teaser: 'Security, fees and deposits explained. Clear pros & cons for beginners.',
      imageUrl: '/images/kraken/kraken-preview-card.webp'
    }
  ];

  // FAQ data
  faqItems = [
    {
      question: 'How is Learn different from Guides?',
      answer: 'Learn focuses on concepts and fundamentals (what is Bitcoin?), while Guides are step-by-step tutorials (how to buy Bitcoin).'
    },
    {
      question: 'How often is content updated?',
      answer: 'Articles are reviewed quarterly and updated when technology or regulations change. Major updates are marked with new dates.'
    },
    {
      question: 'What level of knowledge do I need?',
      answer: 'Start with our "Beginner" labeled articles. No prior crypto knowledge required — we explain everything in plain English.'
    },
    {
      question: 'Can I suggest topics to cover?',
      answer: 'Yes! Contact us with topic requests. We prioritize explanations that help UK investors make informed decisions.'
    }
  ];
}
