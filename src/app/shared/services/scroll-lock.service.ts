import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollLockService {
  private scrollPosition = 0;
  private isLocked = false;

  constructor(private windowService: WindowService) {}

  /**
   * Блокирует скролл страницы и сохраняет текущую позицию
   */
  lock(): void {
    if (this.isLocked || !this.windowService.isBrowserPlatform()) return;

    const doc = this.windowService.document;
    const win = this.windowService.nativeWindow;
    if (!doc || !win) return;

    this.scrollPosition = win.scrollY;
    doc.body.style.overflow = 'hidden';
    doc.body.style.position = 'fixed';
    doc.body.style.top = `-${this.scrollPosition}px`;
    doc.body.style.width = '100%';
    this.isLocked = true;
  }

  /**
   * Разблокирует скролл и восстанавливает позицию
   */
  unlock(): void {
    if (!this.isLocked || !this.windowService.isBrowserPlatform()) return;

    const doc = this.windowService.document;
    if (!doc) return;

    doc.body.style.overflow = '';
    doc.body.style.position = '';
    doc.body.style.top = '';
    doc.body.style.width = '';
    this.windowService.scrollTo({ top: this.scrollPosition, behavior: 'auto' });
    this.isLocked = false;
  }

  /**
   * Проверяет заблокирован ли скролл
   */
  isScrollLocked(): boolean {
    return this.isLocked;
  }
}
