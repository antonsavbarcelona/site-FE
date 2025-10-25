import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from '../../../../shared/ui/review-card/review-card.component';
import { ButtonPrimaryComponent } from '../../../../shared/ui/button-primary/button-primary.component';
import { ReviewCard, SectionHeader } from '../../home-content.config';

@Component({
  selector: 'app-coin-reviews-section',
  standalone: true,
  imports: [
    CommonModule,
    ReviewCardComponent,
    ButtonPrimaryComponent
  ],
  templateUrl: './coin-reviews-section.component.html',
  styleUrl: './coin-reviews-section.component.scss'
})
export class CoinReviewsSectionComponent {
  @Input({ required: true }) header!: SectionHeader;
  @Input({ required: true }) reviews!: ReviewCard[];
}
