import { Routes } from '@angular/router';

export const GUIDES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./guides.component').then(m => m.GuidesComponent)
  },
  {
    path: 'how-to-buy-eth-uk',
    loadComponent: () => import('./articles/how-to-buy-eth-uk/how-to-buy-eth-uk.component').then(m => m.HowToBuyEthUkComponent)
  }
];
