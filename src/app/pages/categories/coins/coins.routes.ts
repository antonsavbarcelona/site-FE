import { Routes } from '@angular/router';

export const COINS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./coins.component').then(m => m.CoinsComponent)
  },
  {
    path: 'bitcoin-review',
    loadComponent: () => import('./articles/bitcoin-origin-new/bitcoin-origin-new.component').then(m => m.BitcoinOriginNewComponent)
  },
  {
    path: 'ethereum-review',
    loadComponent: () => import('./articles/ethereum-review/ethereum-review.component').then(m => m.EthereumReviewComponent)
  }
];
