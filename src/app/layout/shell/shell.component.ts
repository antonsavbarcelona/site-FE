import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SkeletonComponent } from  '@shared/ui/skeleton/skeleton.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SeoService } from '../../shared/services/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SkeletonComponent]
})
export class ShellComponent implements OnInit, OnDestroy {
  isLoading = false;
  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private seo: SeoService,
    private title: Title
  ) {}

  ngOnInit() {
    // Показываем skeleton при начале навигации
    this.subscriptions.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationStart))
        .subscribe(() => {
          this.isLoading = true;
        })
    );

    // Скрываем skeleton после завершения навигации
    this.subscriptions.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.isLoading = false;
        })
    );

    // SEO Fallback - устанавливаем дефолтные теги если компонент не установил свои
    const defaultTitle = 'Tokenoversity — Your Complete Crypto Guide for the UK';

    this.subscriptions.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          // Даём компоненту время установить свои SEO теги
          setTimeout(() => {
            const currentTitle = this.title.getTitle();

            // Если title всё ещё дефолтный из index.html или пустой - установим правильный
            if (!currentTitle || currentTitle === defaultTitle || currentTitle === 'member-client') {
              const cleanUrl = event.urlAfterRedirects.split('?')[0]; // Убираем query params

              this.seo.setPageSeo({
                title: defaultTitle,
                description: 'Independent crypto exchange reviews, step-by-step guides, and security basics. Clear, evergreen, and jargon-free resources for UK beginners.',
                url: `https://tokenoversity.com${cleanUrl}`,
                type: 'website'
              });

              // Добавляем базовую Organization schema
              this.seo.addJsonLd(this.seo.createOrganizationSchema());
            }
          }, 200); // 200ms достаточно для ngOnInit компонента
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
