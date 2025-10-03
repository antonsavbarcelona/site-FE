import { Component, input, computed } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface ReviewCardData {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  icon: string;
  label: string;
  theme: 'light' | 'dark';
  link: string;
  buttonText: string;
  imageUrl?: string;
  readTime?: string;
  featured?: boolean;
  teaser?: string;
  coinTag?: string;
  excerpt?: string;
}

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  review = input.required<ReviewCardData>();

  coinName = computed(() => {
    const title = this.review().title;
    if (title.includes('Bitcoin')) return 'Bitcoin (BTC)';
    if (title.includes('Ethereum')) return 'Ethereum (ETH)';
    if (title.includes('Solana')) return 'Solana (SOL)';
    return title;
  });
}
