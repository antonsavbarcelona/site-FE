import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {ReviewCardData} from '../../../shared/ui/review-card/review-card.component';
import {CategoryHeroComponent, CategoryHeroData} from '../components/category-hero/category-hero.component';
import {
  CategoryControlsComponent,
  CategoryControlsConfig
} from '../components/category-controls/category-controls.component';
import {CategoryGridComponent} from '../components/category-grid/category-grid.component';
import {CategorySidebarComponent, SidebarData} from '../components/category-sidebar/category-sidebar.component';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.scss',
  standalone: true,
  imports: [RouterLink, CategoryHeroComponent, CategoryControlsComponent, CategoryGridComponent, CategorySidebarComponent]
})
export class GuidesComponent {
  // Hero configuration
  heroData: CategoryHeroData = {
    title: 'How-to Guides',
    subtitle: 'Step-by-step tutorials for buying, trading, and managing cryptocurrency safely in the UK.',
    stats: '8 guides • Updated Jun 2025',
    primaryCta: {
      text: 'Start with basics →',
      link: '/guides/basics'
    },
    secondaryCta: {
      text: 'Browse all guides →',
      link: '#feed'
    },
    backgroundColor: "url('/images/categories/guides/guides-hero.webp') center/cover no-repeat",
    useTextBackground: true
  };

  // Controls configuration
  controlsConfig: CategoryControlsConfig = {
    filterChips: [
      { name: 'All', active: true, value: 'all' },
      { name: 'Beginner', active: false, value: 'beginner' },
      { name: 'Buying', active: false, value: 'buying' },
      { name: 'Security', active: false, value: 'security' },
      { name: 'Advanced', active: false, value: 'advanced' }
    ],
    sortOptions: [
      { name: 'Newest', value: 'newest', active: true },
      { name: 'Updated', value: 'updated', active: false },
      { name: 'A–Z', value: 'alphabetical', active: false },
      { name: 'Difficulty', value: 'difficulty', active: false },
      { name: 'Most read', value: 'most-read', active: false }
    ],
    searchPlaceholder: 'Search guides…',
    showSearch: true,
    showSort: true
  };

  // Guide cards data
  reviewCards: ReviewCardData[] = [
    {
      id: 1,
      title: 'How to Buy ETH in the UK — Kraken Walkthrough (2025)',
      category: 'Buying Guide',
      date: 'Jan 15, 2025',
      readTime: '8–10 min read',
      author: 'Crypto Team',
      icon: 'Ξ',
      label: 'GUIDE',
      theme: 'light',
      link: '/guides/how-to-buy-eth-uk',
      buttonText: 'Read Guide',
      teaser: 'Complete step-by-step guide to buying Ethereum safely in the UK using Kraken exchange.',
      coinTag: 'buying'
    },
    {
      id: 2,
      title: 'How to Buy BTC (UK)',
      category: 'Buying Guide',
      date: 'Jan 12, 2025',
      readTime: '9–11 min read',
      author: 'Crypto Team',
      icon: '₿',
      label: 'GUIDE',
      theme: 'light',
      link: '/guides/how-to-buy-btc-uk',
      buttonText: 'Read Guide',
      teaser: 'Your first Bitcoin purchase made simple — from account setup to secure storage.',
      coinTag: 'buying'
    },
    {
      id: 3,
      title: 'How to Deposit on Kraken — Step‑by‑Step',
      category: 'Exchange Guide',
      date: 'Jan 10, 2025',
      readTime: '5–7 min read',
      author: 'Crypto Team',
      icon: '💳',
      label: 'GUIDE',
      theme: 'light',
      link: '/guides/how-to-deposit-kraken',
      buttonText: 'Read Guide',
      teaser: 'Fund your Kraken account safely — SEPA transfers, card deposits, and verification tips.',
      coinTag: 'beginner'
    },
    {
      id: 4,
      title: 'Withdraw to a Hardware Wallet',
      category: 'Security Guide',
      date: 'Jan 8, 2025',
      readTime: '7–9 min read',
      author: 'Crypto Team',
      icon: '🔐',
      label: 'GUIDE',
      theme: 'light',
      link: '/guides/withdraw-hardware-wallet',
      buttonText: 'Read Guide',
      teaser: 'Move your crypto from exchanges to cold storage — Ledger and Trezor setup included.',
      coinTag: 'security'
    },
    {
      id: 5,
      title: 'Setting Up 2FA for Crypto Accounts',
      category: 'Security Guide',
      date: 'Jan 5, 2025',
      readTime: '6–8 min read',
      author: 'Crypto Team',
      icon: '🛡️',
      label: 'GUIDE',
      theme: 'light',
      link: '/guides/setup-2fa-crypto',
      buttonText: 'Read Guide',
      teaser: 'Secure your exchange accounts with two-factor authentication — Google Authenticator and backup codes.',
      coinTag: 'security'
    },
    {
      id: 6,
      title: 'Understanding Crypto Wallets',
      category: 'Beginner Guide',
      date: 'Jan 3, 2025',
      readTime: '8–10 min read',
      author: 'Crypto Team',
      icon: '👛',
      label: 'GUIDE',
      theme: 'light',
      link: '/guides/crypto-wallets-explained',
      buttonText: 'Read Guide',
      teaser: 'Hot vs cold wallets, private keys, and seed phrases — everything beginners need to know.',
      coinTag: 'beginner'
    }
  ];

  // Sidebar configuration
  sidebarData: SidebarData = {
    popularArticles: [
      {
        title: 'How to Buy ETH in the UK',
        category: 'Guide',
        date: 'Jan 15, 2025',
        link: '/guides/how-to-buy-eth-uk'
      },
      {
        title: 'Setting Up Hardware Wallets',
        category: 'Security',
        date: 'Jan 12, 2025',
        link: '/security/hardware-wallets'
      },
      {
        title: 'Understanding Crypto Wallets',
        category: 'Guide',
        date: 'Jan 8, 2025',
        link: '/guides/crypto-wallets'
      }
    ],
    relatedCategories: [
      {
        name: 'Learn Crypto',
        description: 'Crypto fundamentals',
        link: '/learn'
      },
      {
        name: 'Security & Taxes',
        description: 'Stay safe and compliant',
        link: '/security'
      },
      {
        name: 'Coin Reviews',
        description: 'Independent crypto reviews',
        link: '/coins'
      }
    ],
    showBestForUK: false,
    showNewsletter: true
  };

  searchQuery = '';
  currentFilter = 'all';
  currentSort = 'newest';

  // Event handlers
  onFilterChange(filter: string) {
    this.currentFilter = filter;
    this.controlsConfig.filterChips.forEach(chip => chip.active = chip.value === filter);
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
  }

  onSortChange(sort: string) {
    this.currentSort = sort;
    this.controlsConfig.sortOptions.forEach(option => option.active = option.value === sort);
  }

  onClearFilters() {
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.controlsConfig.filterChips.forEach(chip => chip.active = chip.value === 'all');
  }

  getFilteredCards(): ReviewCardData[] {
    let cards = this.reviewCards;

    // Apply filter
    if (this.currentFilter !== 'all') {
      cards = cards.filter(card => card.coinTag === this.currentFilter);
    }

    // Apply search
    if (this.searchQuery) {
      cards = cards.filter(card =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (card.teaser && card.teaser.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    }

    return cards;
  }
}
