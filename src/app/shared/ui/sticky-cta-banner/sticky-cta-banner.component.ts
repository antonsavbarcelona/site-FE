import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sticky-cta-banner',
  standalone: true,
  imports: [],
  templateUrl: './sticky-cta-banner.component.html',
  styleUrl: './sticky-cta-banner.component.scss'
})
export class StickyCTABannerComponent {
  title = input<string>('Ready to Start?');
  description = input<string>('Join thousands of users and get started today');
  ctaText = input<string>('Get Started');
  ctaLink = input<string>('#');
}
