import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ButtonPrimaryComponent} from '@shared/ui/button-primary/button-primary.component';
import {ButtonSecondaryComponent} from '@shared/ui/button-secondary/button-secondary.component';

export interface CategoryHeroData {
  title: string;
  subtitle: string;
  stats: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
  heroImage?: string;
  backgroundColor?: string;
  useTextBackground?: boolean; // Флаг для подложки под текст
}

@Component({
  selector: 'app-category-hero',
  templateUrl: './category-hero.component.html',
  styleUrl: './category-hero.component.scss',
  standalone: true,
  imports: [RouterLink, ButtonPrimaryComponent, ButtonSecondaryComponent]
})
export class CategoryHeroComponent {
  data = input.required<CategoryHeroData>();

  backgroundStyle = computed(() => {
    if (this.data().backgroundColor) {
      return this.data().backgroundColor;
    }
    // Дефолтный градиент - используем CSS переменную
    return 'var(--gradient-primary)';
  });

  hasTextBackground = computed(() => !!this.data().useTextBackground);
}
