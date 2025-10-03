import { Component, input } from '@angular/core';

export interface KeyValueTableItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-key-value-table',
  standalone: true,
  imports: [],
  templateUrl: './key-value-table.component.html',
  styleUrl: './key-value-table.component.scss'
})
export class KeyValueTableComponent {
  title = input<string>('Key facts');
  items = input.required<KeyValueTableItem[]>();
}
