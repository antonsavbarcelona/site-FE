import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  private visitedRoutes = new Set<string>();

  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(private router: Router) {
    this.initializeRouteTracking();
  }

  private initializeRouteTracking(): void {
    // Отслеживаем переходы между роутами
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentRoute = event.urlAfterRedirects;
        
        if (this.visitedRoutes.has(currentRoute)) {
          // Страница уже кеширована - показываем сразу
          this.setLoading(false);
        } else {
          // Новая страница - показываем skeleton
          this.setLoading(true);
          this.visitedRoutes.add(currentRoute);
          
          // Убираем skeleton через время загрузки
          setTimeout(() => {
            this.setLoading(false);
          }, 300);
        }
      });

    // Первоначальная загрузка
    const initialRoute = this.router.url;
    this.visitedRoutes.add(initialRoute);
    setTimeout(() => {
      this.setLoading(false);
    }, 500);
  }

  setLoading(loading: boolean): void {
    this.isLoadingSubject.next(loading);
  }

  clearVisitedRoutes(): void {
    this.visitedRoutes.clear();
  }

  isRouteCached(route: string): boolean {
    return this.visitedRoutes.has(route);
  }
}
