import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleCardLargeComponent } from '../../shared/ui/article-card-large/article-card-large.component';
import { NewsSectionComponent } from '../../shared/ui/news-section/news-section.component';
import { ReviewCardComponent } from '../../shared/ui/review-card/review-card.component';
import { ButtonPrimaryComponent } from '../../shared/ui/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../../shared/ui/button-secondary/button-secondary.component';
import { ReviewMethodologyComponent } from './components/review-methodology/review-methodology.component';
import { EvaluationCriteriaComponent } from './components/evaluation-criteria/evaluation-criteria.component';
import { SeoService } from '../../shared/services/seo.service';
import {
  homePageContent,
  testLargeArticles,
  newsData,
  cryptoKnowledgeReviews,
  securityTaxesReviews
} from './home-content.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ArticleCardLargeComponent,
    NewsSectionComponent,
    ReviewCardComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    ReviewMethodologyComponent,
    EvaluationCriteriaComponent
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  // Импортируем контент из конфига
  sections = homePageContent;

  // Импортируем данные из конфига
  testLargeArticles = testLargeArticles;
  newsData = newsData;
  cryptoKnowledgeReviews = cryptoKnowledgeReviews;
  securityTaxesReviews = securityTaxesReviews;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // Устанавливаем SEO-теги для главной страницы
    this.seo.setPageSeo({
      title: 'Tokenoversity — Your Complete Crypto Guide for the UK',
      description: 'Independent crypto exchange reviews, step-by-step guides, and security basics. Clear, evergreen, and jargon-free resources for UK beginners.',
      keywords: 'crypto guide, cryptocurrency exchange, UK crypto, bitcoin guide, ethereum guide, crypto security, crypto taxes UK',
      image: '/images/og-home.webp',
      url: 'https://tokenoversity.com/',
      type: 'website'
    });

    // Добавляем JSON-LD схемы
    const schemas = [
      this.seo.createWebSiteSchema(),
      this.seo.createOrganizationSchema(),
      // ItemList для обзоров криптовалют
      this.seo.createItemListSchema([
        { name: 'Bitcoin Review', url: '/coins/bitcoin-review', image: '/images/home/BTC-card-article-preview.webp' },
        { name: 'Ethereum Review', url: '/coins/ethereum-review', image: '/images/home/ETH-card-article-preview.webp' },
        { name: 'Solana Review', url: '/coins/solana-review', image: '/images/home/SOL-card-article-preview.webp' }
      ])
    ];

    this.seo.addJsonLd(schemas);
  }

  ngOnDestroy(): void {
    // Очищаем JSON-LD при уходе со страницы
    this.seo.removeJsonLd();
  }
}
