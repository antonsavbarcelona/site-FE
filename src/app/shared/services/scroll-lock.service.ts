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
    if (!doc) return;

    // Просто блокируем overflow без position: fixed
    // Это не ломает позиционирование absolute элементов
    doc.body.style.overflow = 'hidden';
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
    this.isLocked = false;
  }

  /**
   * Проверяет заблокирован ли скролл
   */
  isScrollLocked(): boolean {
    return this.isLocked;
  }
}
