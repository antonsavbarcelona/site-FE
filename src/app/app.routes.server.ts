import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Main routes - предрендерим
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'home', renderMode: RenderMode.Prerender },

  // Exchange routes
  { path: 'best-crypto-exchange-uk', renderMode: RenderMode.Prerender },
  { path: 'exchanges/coinbase-review', renderMode: RenderMode.Prerender },
  { path: 'exchanges/kraken-review', renderMode: RenderMode.Prerender },

  // Coins routes
  { path: 'coins', renderMode: RenderMode.Prerender },
  { path: 'coins/bitcoin-review', renderMode: RenderMode.Prerender },
  { path: 'coins/ethereum-review', renderMode: RenderMode.Prerender },

  // Guides routes
  { path: 'guides', renderMode: RenderMode.Prerender },
  { path: 'guides/how-to-buy-eth-uk', renderMode: RenderMode.Prerender },

  // Security routes
  { path: 'security', renderMode: RenderMode.Prerender },
  { path: 'security/crypto-risks', renderMode: RenderMode.Prerender },
  { path: 'security/uk-crypto-tax', renderMode: RenderMode.Prerender },

  // Learn route
  { path: 'learn', renderMode: RenderMode.Client },

  // Redirect routes - клиентские
  { path: 'coinbase-review', renderMode: RenderMode.Client },
  { path: 'kraken-review', renderMode: RenderMode.Client },
  { path: 'bitcoin-origin', renderMode: RenderMode.Client },
  { path: 'ethereum-review', renderMode: RenderMode.Client },
  { path: 'how-to-buy-eth-uk', renderMode: RenderMode.Client },
  { path: 'crypto-risks-security', renderMode: RenderMode.Client },
  { path: 'uk-crypto-tax', renderMode: RenderMode.Client },

  // Storybook
  { path: 'storybook', renderMode: RenderMode.Client },

  // 404 page - prerender
  { path: '404', renderMode: RenderMode.Prerender },

  // Wildcard - client side (не пререндерим, иначе все несуществующие URL станут 404)
  { path: '**', renderMode: RenderMode.Client }
];
