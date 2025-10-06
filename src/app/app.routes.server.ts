import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // SEO-важные страницы - предрендерим
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'home', renderMode: RenderMode.Prerender },
  { path: 'coins', renderMode: RenderMode.Prerender },
  { path: 'coins/bitcoin-review', renderMode: RenderMode.Prerender },
  { path: 'coins/ethereum-review', renderMode: RenderMode.Prerender },
  { path: 'guides', renderMode: RenderMode.Prerender },
  { path: 'guides/how-to-buy-eth-uk', renderMode: RenderMode.Prerender },
  { path: 'security', renderMode: RenderMode.Prerender },

  // Все остальные (learn, storybook, etc.) автоматически Client-side
];
