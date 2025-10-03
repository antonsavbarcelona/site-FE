import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../button-secondary/button-secondary.component';

export interface ArticleCardLargeData {
  // Required fields
  title: string;
  description: string;
  category: string;
  date: string;
  routerLink: string;
  primaryCta: string;
  primaryCtaLink: string;
  secondaryCta: string;

  // Optional fields
  readTime?: string;
  imageUrl?: string;
  secondaryCtaLink?: string;
  gradient?: string;
  icon?: string;
}

@Component({
  selector: 'app-article-card-large',
  standalone: true,
  imports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent
  ],
  templateUrl: './article-card-large.component.html',
  styleUrl: './article-card-large.component.scss'
})
export class ArticleCardLargeComponent {
  article = input.required<ArticleCardLargeData>();

  constructor(private router: Router) {}

  onCardClick(event: Event): void {
    // Don't navigate if clicking on action buttons
    const target = event.target as HTMLElement;
    if (target.closest('.article-actions')) {
      return;
    }

    this.router.navigate([this.article().routerLink]);
  }

  getAriaLabel(type: 'primary' | 'secondary'): string {
    if (type === 'primary') {
      return `${this.article().primaryCta} (opens in new tab)`;
    }
    return this.article().secondaryCta;
  }
}
