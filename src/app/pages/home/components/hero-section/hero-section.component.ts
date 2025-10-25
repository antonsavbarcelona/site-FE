import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonPrimaryComponent } from '../../../../shared/ui/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../../../../shared/ui/button-secondary/button-secondary.component';
import { HeroContent } from '../../home-content.config';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input({ required: true }) data!: HeroContent;
}
