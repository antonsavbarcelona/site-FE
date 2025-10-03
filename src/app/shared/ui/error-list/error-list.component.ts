import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-list',
  standalone: true,
  templateUrl: './error-list.component.html',
  styleUrl: './error-list.component.scss',
  imports: []
})
export class ErrorListComponent {
  items = input<string[]>([]);
  title = input<string>('');
}
