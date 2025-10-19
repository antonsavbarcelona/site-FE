import { Routes } from '@angular/router';

export const SECURITY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./security.component').then(m => m.SecurityComponent)
  },
  {
    path: 'crypto-risks',
    loadComponent: () => import('./articles/crypto-risks-security/crypto-risks-security.component').then(m => m.CryptoRisksSecurityComponent)
  },
  {
    path: 'uk-crypto-tax',
    loadComponent: () => import('./articles/uk-crypto-tax/uk-crypto-tax.component').then(m => m.UkCryptoTaxComponent)
  }
];
