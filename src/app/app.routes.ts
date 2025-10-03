import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'best-crypto-exchange-uk',
    loadComponent: () => import('./pages/categories/exchanges/best-crypto-exchange-uk/best-crypto-exchange-uk.component').then(m => m.BestCryptoExchangeUkComponent)
  },
  {
    path: 'exchanges/coinbase-review',
    loadComponent: () => import('./pages/categories/exchanges/coinbase-review/coinbase-review.component').then(m => m.CoinbaseReviewComponent)
  },
  {
    path: 'exchanges/kraken-review',
    loadComponent: () => import('./pages/categories/exchanges/kraken-review/kraken-review.component').then(m => m.KrakenReviewComponent)
  },
  {
    path: 'coins',
    loadComponent: () => import('./pages/categories/coins/coins.component').then(m => m.CoinsComponent)
  },
  {
    path: 'coins/bitcoin-review',
    loadComponent: () => import('./pages/categories/coins/articles/bitcoin-origin-new/bitcoin-origin-new.component').then(m => m.BitcoinOriginNewComponent)
  },
  {
    path: 'coins/ethereum-review',
    loadComponent: () => import('./pages/categories/coins/articles/ethereum-review/ethereum-review.component').then(m => m.EthereumReviewComponent)
  },
  {
    path: 'guides',
    loadComponent: () => import('./pages/categories/guides/guides.component').then(m => m.GuidesComponent)
  },
  {
    path: 'guides/how-to-buy-eth-uk',
    loadComponent: () => import('./pages/categories/guides/articles/how-to-buy-eth-uk/how-to-buy-eth-uk.component').then(m => m.HowToBuyEthUkComponent)
  },
  {
    path: 'security',
    loadComponent: () => import('./pages/categories/security/security.component').then(m => m.SecurityComponent)
  },
  {
    path: 'security/crypto-risks',
    loadComponent: () => import('./pages/categories/security/articles/crypto-risks-security/crypto-risks-security.component').then(m => m.CryptoRisksSecurityComponent)
  },
  {
    path: 'security/uk-crypto-tax',
    loadComponent: () => import('./pages/categories/security/articles/uk-crypto-tax/uk-crypto-tax.component').then(m => m.UkCryptoTaxComponent)
  },
  {
    path: 'learn',
    loadComponent: () => import('./pages/learn/learn.component').then(m => m.LearnComponent)
  },
  {
    path: 'coinbase-review',
    redirectTo: '/exchanges/coinbase-review'
  },
  {
    path: 'kraken-review',
    redirectTo: '/exchanges/kraken-review'
  },
  {
    path: 'bitcoin-origin',
    redirectTo: '/coins/bitcoin-review'
  },
  {
    path: 'ethereum-review',
    redirectTo: '/coins/ethereum-review'
  },
  {
    path: 'how-to-buy-eth-uk',
    redirectTo: '/guides/how-to-buy-eth-uk'
  },
  {
    path: 'crypto-risks-security',
    redirectTo: '/security/crypto-risks'
  },
  {
    path: 'uk-crypto-tax',
    redirectTo: '/security/uk-crypto-tax'
  },
  {
    path: 'storybook',
    loadComponent: () => import('./pages/storybook/storybook.component').then(m => m.StorybookComponent)
  },
];
