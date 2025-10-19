import { Injectable, signal } from '@angular/core';
import { WindowService } from './window.service';

/**
 * ViewportService - Reactive viewport breakpoints
 * Tracks screen size and provides breakpoint signals for UI logic
 */
@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  // Breakpoint: 1024px для TOC логики (мобильная vs десктопная версия)
  private readonly MOBILE_BREAKPOINT = 1024;

  // Reactive signal для ширины экрана < 1024px
  public readonly isMobile = signal<boolean>(false);

  constructor(private windowService: WindowService) {
    if (this.windowService.isBrowserPlatform()) {
      // Начальная проверка
      this.checkViewport();

      // Слушаем resize
      this.windowService.addEventListener('resize', () => this.checkViewport());
    }
  }

  private checkViewport(): void {
    const width = this.windowService.innerWidth;
    this.isMobile.set(width < this.MOBILE_BREAKPOINT);
  }
}
