import { Component, input } from '@angular/core';

export interface ComparisonColumn {
  key: string;
  title: string;
  type?: 'text' | 'percentage' | 'highlight';
}

export interface ComparisonRow {
  [key: string]: string | number;
}

@Component({
  selector: 'app-comparison-table',
  standalone: true,
  templateUrl: './comparison-table.component.html',
  styleUrl: './comparison-table.component.scss',
  imports: []
})
export class ComparisonTableComponent {
  title = input<string>('Comparison with competitors');
  columns = input<ComparisonColumn[]>([]);
  rows = input<ComparisonRow[]>([]);
  highlightRowIndex = input<number>();
}
