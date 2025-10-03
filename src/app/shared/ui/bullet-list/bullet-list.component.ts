import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bullet-list',
  standalone: true,
  imports: [],
  templateUrl: './bullet-list.component.html',
  styleUrl: './bullet-list.component.scss'
})
export class BulletListComponent {
  items = input.required<string[]>();
}
