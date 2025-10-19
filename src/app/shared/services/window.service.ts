import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * WindowService - Safe access to window object
 * Simply provides window API with SSR fallbacks, no business logic
 */
@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Get native window object (browser only)
   */
  get nativeWindow(): Window | undefined {
    return this.isBrowser ? window : undefined;
  }

  /**
   * Get window.innerWidth
   */
  get innerWidth(): number {
    return this.isBrowser ? window.innerWidth : 1920;
  }

  /**
   * Get window.innerHeight
   */
  get innerHeight(): number {
    return this.isBrowser ? window.innerHeight : 1080;
  }

  /**
   * Get window.document
   */
  get document(): Document | null {
    return this.isBrowser ? window.document : null;
  }

  /**
   * addEventListener wrapper
   */
  addEventListener(event: string, handler: EventListener): void {
    if (this.isBrowser) {
      window.addEventListener(event, handler);
    }
  }

  /**
   * removeEventListener wrapper
   */
  removeEventListener(event: string, handler: EventListener): void {
    if (this.isBrowser) {
      window.removeEventListener(event, handler);
    }
  }

  /**
   * scrollTo wrapper
   */
  scrollTo(options: ScrollToOptions): void {
    if (this.isBrowser) {
      window.scrollTo(options);
    }
  }

  /**
   * setTimeout wrapper
   */
  setTimeout(handler: TimerHandler, timeout?: number): number {
    return this.isBrowser ? window.setTimeout(handler, timeout) : 0;
  }

  /**
   * Check if we're in browser
   */
  isBrowserPlatform(): boolean {
    return this.isBrowser;
  }
}
