import { Component, signal, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollLockService } from '../../shared/services/scroll-lock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgClass]
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Mobile menu state
  protected readonly isMenuOpen = signal(false);

  constructor(
    private router: Router,
    private scrollLock: ScrollLockService
  ) {}

  // Navigation links
  protected readonly navLinks = [
    {
      label: 'Best for UK 🔥',
      mobileLabel: 'Best for UK 🔥',
      href: '/best-crypto-exchange-uk',
      active: false,
      ariaLabel: 'Best exchange for the UK (editor\'s pick)',
      title: 'Best crypto exchange for the UK',
      accent: true
    },
    { label: 'Learn', href: '/learn', active: false },
    { label: 'Guides', href: '/guides', active: false },
    { label: 'Coins', href: '/coins', active: false },
    { label: 'Security', href: '/security', active: false }
  ];

  ngOnInit(): void {
    // Set initial active state based on current route
    this.updateActiveState(this.router.url);

    // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateActiveState(event.url);
      });
  }

  // Update active state based on current URL
  private updateActiveState(currentUrl: string): void {
    this.navLinks.forEach(link => {
      link.active = currentUrl === link.href || currentUrl.startsWith(link.href + '/');
    });
  }

  // Toggle mobile menu
  protected toggleMenu(): void {
    this.isMenuOpen.update(current => !current);

    if (this.isMenuOpen()) {
      this.scrollLock.lock();
    } else {
      this.scrollLock.unlock();
    }
  }

  // Close menu
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.scrollLock.unlock();
  }

  // Close menu on escape key
  @HostListener('document:keydown.escape')
  protected closeMenuOnEscape(): void {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  // Handle nav link click
  protected onNavLinkClick(href: string): void {
    this.closeMenu();
    this.router.navigate([href]);
  }

  // Cleanup on destroy
  ngOnDestroy(): void {
    this.scrollLock.unlock();
  }
}
