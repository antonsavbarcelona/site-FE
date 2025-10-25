import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from '../../../../shared/ui/review-card/review-card.component';
import { ButtonSecondaryComponent } from '../../../../shared/ui/button-secondary/button-secondary.component';
import { ReviewCard, SectionHeader } from '../../home-content.config';

@Component({
  selector: 'app-security-taxes-section',
  standalone: true,
  imports: [
    CommonModule,
    ReviewCardComponent,
    ButtonSecondaryComponent
  ],
  templateUrl: './security-taxes-section.component.html',
  styleUrl: './security-taxes-section.component.scss'
})
export class SecurityTaxesSectionComponent {
  @Input({ required: true }) header!: SectionHeader;
  @Input({ required: true }) reviews!: ReviewCard[];
}
