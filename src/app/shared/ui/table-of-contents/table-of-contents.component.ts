import {Component, input, OnInit, OnDestroy, signal, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ViewportService } from '../../services/viewport.service';
import { WindowService } from '../../services/window.service';
import { CryptoCalculatorComponent } from '../crypto-calculator/crypto-calculator.component';

export interface TocItem {
  id: string;
  title: string;
  level: number; // h2 = 2, h3 = 3, etc.
  element?: HTMLElement;
}

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.scss',
  standalone: true,
  imports: [CryptoCalculatorComponent]
})
export class TableOfContentsComponent implements OnInit, OnDestroy {
  title = input<string>('Best Stock Trading Apps of 2025');
  contentSelector = input<string>('.article-content');
  showMobile = input<boolean>(false);
  calculatorConfig = input<any>(); // Конфиг для калькулятора (опционально)

  protected readonly tocItems = signal<TocItem[]>([]);
  protected readonly activeItemId = signal<string>('');
  protected readonly isMobileOpen = signal<boolean>(false);
  protected readonly currentActiveTitle = signal<string>('');

  private observer?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    protected viewport: ViewportService,
    private windowService: WindowService
  ) {}

  // Геттер для проверки мобильного устройства
  protected get isMobileDevice() {
    return this.viewport.isMobile;
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // Не выполняем на сервере
    }

    // Перемещаем мобильную TOC в header-container
    if (this.isMobileDevice()) {
      this.moveTocToHeaderContainer();
    }

    // Пытаемся сразу загрузить TOC
    this.tryGenerateToc();
  }

  // Пытаемся сгенерировать TOC с умной задержкой
  private tryGenerateToc(attempt = 0): void {
    const maxAttempts = 10;
    const delay = attempt === 0 ? 0 : Math.min(50 * attempt, 200); // 0, 50, 100, 150, 200ms

    this.windowService.setTimeout(() => {
      const contentElement = document.querySelector(this.contentSelector());
      const headings = contentElement?.querySelectorAll('h2, h3, h4');

      // Если нашли заголовки - генерируем TOC
      if (headings && headings.length > 0) {
        this.generateTocItems();
        this.setupIntersectionObserver();
      }
      // Если не нашли и еще есть попытки - пробуем снова
      else if (attempt < maxAttempts) {
        this.tryGenerateToc(attempt + 1);
      }
    }, delay);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    // Возвращаем TOC обратно если нужно
    this.moveTocBackFromHeader();
  }

  // Перемещаем мобильную TOC в header container
  private moveTocToHeaderContainer(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const mobileToc = document.querySelector('.mobile-toc') as HTMLElement;
      const headerSlot = document.querySelector('#mobile-toc-slot') as HTMLElement;

      if (mobileToc && headerSlot && !headerSlot.contains(mobileToc)) {
        headerSlot.appendChild(mobileToc);
      }
    }, 0);
  }

  // Возвращаем TOC обратно
  private moveTocBackFromHeader(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const mobileToc = document.querySelector('.mobile-toc') as HTMLElement;
    const headerSlot = document.querySelector('#mobile-toc-slot') as HTMLElement;

    if (mobileToc && headerSlot && headerSlot.contains(mobileToc)) {
      // Можно вернуть в оригинальное место или просто скрыть
      mobileToc.style.display = 'none';
    }
  }

  // Закрываем мобильное меню при клике вне его
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as Element;
    const tocElement = target.closest('.mobile-toc');

    if (!tocElement && this.isMobileOpen()) {
      this.isMobileOpen.set(false);
    }
  }

  // Генерируем элементы TOC из заголовков в статье
  private generateTocItems(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const contentElement = document.querySelector(this.contentSelector());
    if (!contentElement) return;

    // Ищем все заголовки h2, h3, h4
    const headings = contentElement.querySelectorAll('h2, h3, h4');
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const element = heading as HTMLElement;
      const level = parseInt(element.tagName.charAt(1)); // h2 -> 2, h3 -> 3

      // Создаем ID если его нет
      let id = element.id;
      if (!id) {
        id = `heading-${index}`;
        element.id = id;
      }

      items.push({
        id,
        title: element.textContent || '',
        level,
        element
      });
    });

    this.tocItems.set(items);

    // Устанавливаем первый заголовок как активный
    if (items.length > 0) {
      this.currentActiveTitle.set(items[0].title);
    }
  }

  // Настраиваем Intersection Observer для отслеживания видимых заголовков
  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-100px 0px -80% 0px', // Активируем когда заголовок в верхней части экрана
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      // Ищем самый верхний видимый заголовок
      const visibleHeadings = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleHeadings.length > 0) {
        const activeElement = visibleHeadings[0].target as HTMLElement;
        const newActiveId = activeElement.id;

        // Только если активный элемент действительно изменился
        if (this.activeItemId() !== newActiveId) {
          this.activeItemId.set(newActiveId);

          // Обновляем заголовок для мобильной версии
          const activeItem = this.tocItems().find(item => item.id === newActiveId);
          if (activeItem) {
            this.currentActiveTitle.set(activeItem.title);
          }

          // Автоскролл до активного элемента в TOC
          this.scrollToActiveItemInToc(newActiveId);
        }
      }
    }, options);

    // Наблюдаем за всеми заголовками
    this.tocItems().forEach(item => {
      if (item.element) {
        this.observer!.observe(item.element);
      }
    });
  }

  // Автоскролл до активного элемента в TOC
  private scrollToActiveItemInToc(activeId: string): void {
    // Небольшая задержка чтобы DOM успел обновиться
    setTimeout(() => {
      // Для десктопной версии
      const desktopActiveLink = document.querySelector(`.toc-container .toc-link[data-id="${activeId}"]`);
      if (desktopActiveLink) {
        const tocNav = document.querySelector('.toc-nav');
        if (tocNav) {
          const containerTop = tocNav.scrollTop;
          const containerHeight = tocNav.clientHeight;
          const elementTop = (desktopActiveLink as HTMLElement).offsetTop;
          const elementHeight = (desktopActiveLink as HTMLElement).offsetHeight;

          // Проверяем, виден ли элемент полностью
          const elementBottom = elementTop + elementHeight;
          const containerBottom = containerTop + containerHeight;

          if (elementTop < containerTop || elementBottom > containerBottom) {
            // Скроллим так, чтобы элемент был в центре контейнера
            const scrollTarget = elementTop - (containerHeight / 2) + (elementHeight / 2);
            tocNav.scrollTo({
              top: Math.max(0, scrollTarget),
              behavior: 'smooth'
            });
          }
        }
      }

      // Для мобильной версии (если открыто меню)
      if (this.isMobileOpen()) {
        const mobileActiveLink = document.querySelector(`.mobile-toc-menu .mobile-toc-link[data-id="${activeId}"]`);
        if (mobileActiveLink) {
          const mobileMenu = document.querySelector('.mobile-toc-menu');
          if (mobileMenu) {
            const containerTop = mobileMenu.scrollTop;
            const containerHeight = mobileMenu.clientHeight;
            const elementTop = (mobileActiveLink as HTMLElement).offsetTop;
            const elementHeight = (mobileActiveLink as HTMLElement).offsetHeight;

            const elementBottom = elementTop + elementHeight;
            const containerBottom = containerTop + containerHeight;

            if (elementTop < containerTop || elementBottom > containerBottom) {
              const scrollTarget = elementTop - (containerHeight / 2) + (elementHeight / 2);
              mobileMenu.scrollTo({
                top: Math.max(0, scrollTarget),
                behavior: 'smooth'
              });
            }
          }
        }
      }
    }, 100);
  }

  // Скролл к выбранному заголовку
  protected scrollToHeading(item: TocItem): void {
    if (!item.element) return;

    const headerHeight = 100; // Высота sticky header
    const elementTop = item.element.offsetTop - headerHeight;

    this.windowService.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });

    // Обновляем активный элемент
    this.activeItemId.set(item.id);
    this.currentActiveTitle.set(item.title);

    // Закрываем мобильное меню
    this.isMobileOpen.set(false);
  }

  // Переключаем мобильное меню
  protected toggleMobileMenu(): void {
    const wasOpen = this.isMobileOpen();
    this.isMobileOpen.update(current => !current);

    // Если меню только что открылось, прокручиваем к активному элементу
    if (!wasOpen && this.isMobileOpen()) {
      this.scrollToActiveItemInMobileToc();
    }
  }

  // Прокрутка к активному элементу при открытии мобильного меню
  private scrollToActiveItemInMobileToc(): void {
    const activeId = this.activeItemId();
    if (!activeId) return;

    // Ждем, пока анимация открытия завершится
    setTimeout(() => {
      const mobileActiveLink = document.querySelector(`.mobile-toc-menu .mobile-toc-link[data-id="${activeId}"]`);
      if (mobileActiveLink) {
        const mobileMenu = document.querySelector('.mobile-toc-menu');
        if (mobileMenu) {
          const elementTop = (mobileActiveLink as HTMLElement).offsetTop;
          const elementHeight = (mobileActiveLink as HTMLElement).offsetHeight;
          const containerHeight = mobileMenu.clientHeight;

          // Центрируем активный элемент в контейнере
          const scrollTarget = elementTop - (containerHeight / 2) + (elementHeight / 2);
          mobileMenu.scrollTo({
            top: Math.max(0, scrollTarget),
            behavior: 'smooth'
          });
        }
      }
    }, 250); // Ждем завершения CSS transition (0.2s + небольшой запас)
  }
}
