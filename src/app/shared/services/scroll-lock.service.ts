import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollLockService {
  private scrollPosition = 0;
  private isLocked = false;

  /**
   * Блокирует скролл страницы и сохраняет текущую позицию
   */
  lock(): void {
    if (this.isLocked) return;

    this.scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = '100%';
    this.isLocked = true;
  }

  /**
   * Разблокирует скролл и восстанавливает позицию
   */
  unlock(): void {
    if (!this.isLocked) return;

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, this.scrollPosition);
    this.isLocked = false;
  }

  /**
   * Проверяет заблокирован ли скролл
   */
  isScrollLocked(): boolean {
    return this.isLocked;
  }
}
