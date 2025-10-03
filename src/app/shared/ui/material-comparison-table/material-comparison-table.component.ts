import { Component, input, computed } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {NgClass} from '@angular/common';

export interface MaterialComparisonColumn {
  key: string;
  title: string;
  type?: 'text' | 'percentage' | 'highlight';
}

export interface MaterialComparisonRow {
  [key: string]: string | number;
}

@Component({
  selector: 'app-material-comparison-table',
  standalone: true,
  imports: [MatTableModule, NgClass],
  templateUrl: './material-comparison-table.component.html',
  styleUrl: './material-comparison-table.component.scss'
})
export class MaterialComparisonTableComponent {
  title = input<string>('Comparison with competitors');
  columns = input.required<MaterialComparisonColumn[]>();
  rows = input.required<MaterialComparisonRow[]>();
  highlightRowIndex = input<number>();

  displayedColumns = computed(() => this.columns().map(col => col.key));

  getColumnType(columnKey: string): string | undefined {
    return this.columns().find(col => col.key === columnKey)?.type;
  }
}
