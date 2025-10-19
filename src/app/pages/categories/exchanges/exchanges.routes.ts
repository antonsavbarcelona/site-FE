import { Routes } from '@angular/router';

export const EXCHANGES_ROUTES: Routes = [
  {
    path: 'coinbase-review',
    loadComponent: () => import('./coinbase-review/coinbase-review.component').then(m => m.CoinbaseReviewComponent)
  },
  {
    path: 'kraken-review',
    loadComponent: () => import('./kraken-review/kraken-review.component').then(m => m.KrakenReviewComponent)
  }
];
