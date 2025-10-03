import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CategoryHeroComponent, CategoryHeroData} from '../components/category-hero/category-hero.component';
import {
  CategoryControlsComponent,
  CategoryControlsConfig
} from '../components/category-controls/category-controls.component';
import {CategoryGridComponent} from '../components/category-grid/category-grid.component';
import {CategorySidebarComponent, SidebarData} from '../components/category-sidebar/category-sidebar.component';
import {ReviewCardData} from '@shared/ui/review-card/review-card.component';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.scss',
  standalone: true,
  imports: [RouterLink, CategoryHeroComponent, CategoryControlsComponent, CategoryGridComponent, CategorySidebarComponent]
})
export class CoinsComponent {
  // Hero configuration
  heroData: CategoryHeroData = {
    title: 'Coin Reviews',
    subtitle: 'Independent reviews of major cryptocurrencies — fundamentals, risks and use cases for UK investors.',
    stats: '3 reviews • Updated Jun 2025',
    primaryCta: {
      text: 'See Bitcoin review →',
      link: '/coin/bitcoin'
    },
    secondaryCta: {
      text: 'Browse all reviews →',
      link: '#feed'
    },
    backgroundColor: "url('/images/categories/coins-reviews/coins-review-hero.webp') center/cover no-repeat",
    useTextBackground: true
  };

  // Controls configuration
  controlsConfig: CategoryControlsConfig = {
    filterChips: [
      { name: 'All', active: true, value: 'all' },
      { name: 'Bitcoin', active: false, value: 'bitcoin' },
      { name: 'Ethereum', active: false, value: 'ethereum' },
      { name: 'Solana', active: false, value: 'solana' }
    ],
    sortOptions: [
      { name: 'Newest', value: 'newest', active: true },
      { name: 'Updated', value: 'updated', active: false },
      { name: 'A–Z', value: 'alphabetical', active: false },
      { name: 'Reading time', value: 'reading-time', active: false },
      { name: 'Most read', value: 'most-read', active: false }
    ],
    searchPlaceholder: 'Search coin reviews…',
    showSearch: true,
    showSort: true
  };

  // Review cards data
  reviewCards: ReviewCardData[] = [
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
      link: '/coin/bitcoin',
      buttonText: 'Read Review',
      imageUrl: '/images/home/BTC-card-article-preview.webp',
      teaser: 'Fundamentals, risks, and real-world use cases — written for UK investors.',
      coinTag: 'bitcoin'
    },
    {
      id: 2,
      title: 'Ethereum Review: Smart Contract Platform',
      category: 'Cryptocurrency',
      date: 'Jan 10, 2025',
      readTime: '6–8 min read',
      author: 'Crypto Team',
      icon: 'Ξ',
      label: 'REVIEW',
      theme: 'light',
      link: '/coin/ethereum',
      buttonText: 'Read Review',
      imageUrl: '/images/home/ETH-card-article-preview.webp',
      teaser: 'Fundamentals, risks, and real-world use cases — written for UK investors.',
      coinTag: 'ethereum'
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
      link: '/coin/solana',
      buttonText: 'Read Review',
      imageUrl: '/images/home/SOL-card-article-preview.webp',
      teaser: 'Fundamentals, risks, and real-world use cases — written for UK investors.',
      coinTag: 'solana'
    }
  ];

  // Sidebar configuration
  sidebarData: SidebarData = {
    popularArticles: [
      {
        title: 'How to Buy Bitcoin in the UK',
        category: 'Guide',
        date: 'Jan 20, 2025',
        link: '/guides/how-to-buy-bitcoin-uk'
      },
      {
        title: 'Ethereum vs Bitcoin Comparison',
        category: 'Analysis',
        date: 'Jan 18, 2025',
        link: '/learn/ethereum-vs-bitcoin'
      },
      {
        title: 'Solana DeFi Ecosystem',
        category: 'Learn',
        date: 'Jan 15, 2025',
        link: '/learn/solana-defi'
      }
    ],
    relatedCategories: [
      {
        name: 'Learn Crypto',
        description: 'Fundamentals and explainers',
        link: '/learn'
      },
      {
        name: 'How-to Guides',
        description: 'Step-by-step tutorials',
        link: '/guides'
      },
      {
        name: 'Security & Taxes',
        description: 'Stay safe and compliant',
        link: '/security'
      }
    ],
    showBestForUK: true,
    showNewsletter: false
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
