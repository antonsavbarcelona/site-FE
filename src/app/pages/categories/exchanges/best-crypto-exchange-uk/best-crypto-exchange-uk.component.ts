import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonPrimaryComponent } from '../../../../shared/ui/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../../../../shared/ui/button-secondary/button-secondary.component';
import { SeoService } from '../../../../shared/services/seo.service';
import { setupArticleSeo } from '../../../../shared/utils/article-seo.utils';

@Component({
  selector: 'app-best-crypto-exchange-uk',
  templateUrl: './best-crypto-exchange-uk.component.html',
  styleUrl: './best-crypto-exchange-uk.component.scss',
  standalone: true,
  imports: [RouterLink, ButtonPrimaryComponent, ButtonSecondaryComponent]
})
export class BestCryptoExchangeUkComponent implements OnInit, OnDestroy {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // SEO Setup
    setupArticleSeo(this.seo, {
      title: 'Best Crypto Exchanges UK 2025 — Independent Reviews',
      description: 'Compare the best crypto exchanges for UK investors in 2025. Independent reviews of fees, security, and FCA regulation.',
      keywords: 'best crypto exchange uk, crypto exchange comparison, FCA regulated exchanges, buy bitcoin uk, crypto trading uk',
      image: '/images/best-exchange-uk-hero.webp',
      url: '/best-crypto-exchange-uk',
      author: 'Crypto Expert Team',
      publishedTime: '2025-01-15T00:00:00Z',
      modifiedTime: '2025-01-15T00:00:00Z',
      section: 'Exchange Comparison'
    });
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd();
  }

}
