import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';
import { ButtonPrimaryComponent } from '../../shared/ui/button-primary/button-primary.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonPrimaryComponent]
})
export class NotFoundComponent implements OnInit, OnDestroy {
  
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // SEO для 404 страницы
    this.seo.setPageSeo({
      title: '404 - Page Not Found | Tokenoversity',
      description: 'The page you are looking for does not exist. Return to Tokenoversity homepage or explore our crypto guides.',
      url: 'https://tokenoversity.com/404',
      type: 'website'
    });

    // Добавляем только Organization schema
    this.seo.addJsonLd(this.seo.createOrganizationSchema());
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd();
  }

  // Популярные страницы для быстрой навигации
  popularPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Best Crypto Exchanges UK', url: '/best-crypto-exchange-uk', icon: 'compare_arrows' },
    { title: 'Crypto Guides', url: '/guides', icon: 'book' },
    { title: 'Coin Reviews', url: '/coins', icon: 'currency_bitcoin' },
    { title: 'Security & Taxes', url: '/security', icon: 'security' }
  ];
}
