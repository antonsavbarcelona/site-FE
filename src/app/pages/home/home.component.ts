import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSectionComponent } from '../../shared/ui/news-section/news-section.component';
import { ReviewMethodologyComponent } from './components/review-methodology/review-methodology.component';
import { EvaluationCriteriaComponent } from './components/evaluation-criteria/evaluation-criteria.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TopPicksSectionComponent } from './components/top-picks-section/top-picks-section.component';
import { CoinReviewsSectionComponent } from './components/coin-reviews-section/coin-reviews-section.component';
import { SecurityTaxesSectionComponent } from './components/security-taxes-section/security-taxes-section.component';
import { SeoService } from '../../shared/services/seo.service';
import {
  homePageSections,
  heroContent,
  sectionsHeaders,
  testLargeArticles,
  newsData,
  cryptoKnowledgeReviews,
  securityTaxesReviews,
  PageSection
} from './home-content.config';
import { homeSeoConfig, homeSchemaItems } from './home-seo.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    TopPicksSectionComponent,
    CoinReviewsSectionComponent,
    SecurityTaxesSectionComponent,
    NewsSectionComponent,
    ReviewMethodologyComponent,
    EvaluationCriteriaComponent
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  // Sections configuration
  sections: PageSection[] = homePageSections
    .filter(s => s.enabled)
    .sort((a, b) => a.order - b.order);

  // Content from config
  hero = heroContent;
  headers = sectionsHeaders;
  topPicks = testLargeArticles;
  guides = newsData;
  coinReviews = cryptoKnowledgeReviews;
  securityTaxes = securityTaxesReviews;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // Set SEO tags from config
    this.seo.setPageSeo(homeSeoConfig);

    // Add JSON-LD schemas
    const schemas = [
      this.seo.createWebSiteSchema(),
      this.seo.createOrganizationSchema(),
      this.seo.createItemListSchema(homeSchemaItems)
    ];

    this.seo.addJsonLd(schemas);
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd();
  }
}
