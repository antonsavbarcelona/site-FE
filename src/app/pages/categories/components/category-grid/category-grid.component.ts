import { Component, input, output } from '@angular/core';
import {ReviewCardComponent, ReviewCardData} from '@shared/ui/review-card/review-card.component';
import {ButtonPrimaryComponent} from '@shared/ui/button-primary/button-primary.component';
import {ButtonSecondaryComponent} from '@shared/ui/button-secondary/button-secondary.component';

@Component({
  selector: 'app-category-grid',
  standalone: true,
  templateUrl: './category-grid.component.html',
  styleUrl: './category-grid.component.scss',
  imports: [ReviewCardComponent, ButtonPrimaryComponent, ButtonSecondaryComponent]
})
export class CategoryGridComponent {
  items = input<ReviewCardData[]>([]);
  showLoadMore = input<boolean>(false);
  emptyStateTitle = input<string>('No items found');
  emptyStateDescription = input<string>('Try adjusting your filters or search terms.');
  loadMoreText = input<string>('Load more');

  loadMore = output<void>();
  clearFilters = output<void>();

  onLoadMore() {
    this.loadMore.emit();
  }

  onClearFilters() {
    this.clearFilters.emit();
  }
}
