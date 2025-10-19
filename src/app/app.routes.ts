import { Routes } from '@angular/router';
import { GUIDES_ROUTES } from './pages/categories/guides/guides.routes';
import { COINS_ROUTES } from './pages/categories/coins/coins.routes';
import { EXCHANGES_ROUTES } from './pages/categories/exchanges/exchanges.routes';
import { SECURITY_ROUTES } from './pages/categories/security/security.routes';

export const routes: Routes = [
  // Home
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },

  // Best Exchange (landing page)
  {
    path: 'best-crypto-exchange-uk',
    loadComponent: () => import('./pages/categories/exchanges/best-crypto-exchange-uk/best-crypto-exchange-uk.component').then(m => m.BestCryptoExchangeUkComponent)
  },

  // Exchanges (reviews)
  {
    path: 'exchanges',
    children: EXCHANGES_ROUTES
  },

  // Coins (cryptocurrency reviews)
  {
    path: 'coins',
    children: COINS_ROUTES
  },

  // Guides (how-to articles)
  {
    path: 'guides',
    children: GUIDES_ROUTES
  },

  // Security (risks, taxes, safety)
  {
    path: 'security',
    children: SECURITY_ROUTES
  },

  // Learn (educational content)
  {
    path: 'learn',
    loadComponent: () => import('./pages/learn/learn.component').then(m => m.LearnComponent)
  },

  // Storybook (design system)
  {
    path: 'storybook',
    loadComponent: () => import('./pages/storybook/storybook.component').then(m => m.StorybookComponent)
  },

  // Legacy redirects (old URLs)
  {
    path: 'coinbase-review',
    redirectTo: '/exchanges/coinbase-review',
    pathMatch: 'full'
  },
  {
    path: 'kraken-review',
    redirectTo: '/exchanges/kraken-review',
    pathMatch: 'full'
  },
  {
    path: 'bitcoin-origin',
    redirectTo: '/coins/bitcoin-review',
    pathMatch: 'full'
  },
  {
    path: 'ethereum-review',
    redirectTo: '/coins/ethereum-review',
    pathMatch: 'full'
  },
  {
    path: 'how-to-buy-eth-uk',
    redirectTo: '/guides/how-to-buy-eth-uk',
    pathMatch: 'full'
  },
  {
    path: 'crypto-risks-security',
    redirectTo: '/security/crypto-risks',
    pathMatch: 'full'
  },
  {
    path: 'uk-crypto-tax',
    redirectTo: '/security/uk-crypto-tax',
    pathMatch: 'full'
  },

  // 404 (must be last!)
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 - Page Not Found | Tokenoversity'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 - Page Not Found | Tokenoversity'
  }
];
