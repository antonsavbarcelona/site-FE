import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteCacheService implements RouteReuseStrategy {
  private routeCache = new Map<string, DetachedRouteHandle>();
  private cachedRoutes = new Set<string>([
    '/learn',
    '/coins', 
    '/guides',
    '/security',
    '/home',
    '/'
  ]);

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // Кешируем только указанные роуты
    return this.cachedRoutes.has(route.routeConfig?.path || '');
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const path = route.routeConfig?.path || '';
    if (this.cachedRoutes.has(path)) {
      this.routeCache.set(path, handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path || '';
    return this.routeCache.has(path);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = route.routeConfig?.path || '';
    return this.routeCache.get(path) || null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  // Методы для управления кешем
  clearCache(): void {
    this.routeCache.clear();
  }

  clearRoute(path: string): void {
    this.routeCache.delete(path);
  }

  isCached(path: string): boolean {
    return this.routeCache.has(path);
  }
}
