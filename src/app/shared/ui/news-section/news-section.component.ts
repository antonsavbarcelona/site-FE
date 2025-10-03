import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  imports: [RouterModule, ButtonPrimaryComponent, ButtonSecondaryComponent],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss'
})
export class NewsSectionComponent {
  data = input.required<NewsSectionData>();
}
