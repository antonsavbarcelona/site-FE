import { Component, input, output, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

export interface FilterChip {
  name: string;
  value: string;
  active: boolean;
}

export interface SortOption {
  name: string;
  value: string;
  active: boolean;
}

export interface CategoryControlsConfig {
  filterChips: FilterChip[];
  sortOptions: SortOption[];
  searchPlaceholder: string;
  showSearch?: boolean;
  showSort?: boolean;
}

@Component({
  selector: 'app-category-controls',
  standalone: true,
  templateUrl: './category-controls.component.html',
  styleUrl: './category-controls.component.scss',
  imports: [FormsModule, TitleCasePipe]
})
export class CategoryControlsComponent {
  config = input.required<CategoryControlsConfig>();
  searchQuery = input<string>('');
  currentFilter = input<string>('all');
  currentSort = input<string>('newest');

  filterChange = output<string>();
  searchChange = output<string>();
  sortChange = output<string>();
  clearFilters = output<void>();

  hasActiveFilters = computed(() =>
    this.currentFilter() !== 'all' || this.searchQuery().length > 0
  );

  onFilterChange(filter: string) {
    this.filterChange.emit(filter);
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchChange.emit(target.value);
  }

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortChange.emit(target.value);
  }

  onClearFilters() {
    this.clearFilters.emit();
  }
}
