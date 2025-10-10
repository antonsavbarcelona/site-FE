import { Component, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../button-secondary/button-secondary.component';

export interface NewsItem {
  title: string;
  category: string;
  date: string;
  routerLink: string;
  imageUrl?: string;
  gradient?: string;
  icon?: string;
  readTime?: string;
  description?: string;
  affiliateLink?: string;
  buttonText?: string;
}

export interface NewsSectionData {
  sectionTitle: string;
  sectionDescription?: string;
  featuredItem: NewsItem;
  regularItems: NewsItem[];
  layout?: 'featured-left' | 'featured-right';
}

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [RouterLink, ButtonPrimaryComponent, ButtonSecondaryComponent],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss'
})
export class NewsSectionComponent {
  data = input.required<NewsSectionData>();

  constructor(private router: Router) {}

  navigateToFeatured(event: MouseEvent): void {
    // Не переходим, если клик по кнопке или ссылке
    const target = event.target as HTMLElement;
    if (target.closest('.cta-buttons') || target.closest('.see-all-link')) {
      return;
    }

    this.router.navigate([this.data().featuredItem.routerLink]);
  }
}
