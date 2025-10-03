import { Component, input } from '@angular/core';

export interface ProsItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-pros-list',
  standalone: true,
  templateUrl: './pros-list.component.html',
  styleUrl: './pros-list.component.scss',
  imports: []
})
export class ProsListComponent {
  items = input<ProsItem[]>([]);
  title = input<string>();
}
