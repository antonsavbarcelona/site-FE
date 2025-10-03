import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tldr',
  standalone: true,
  templateUrl: './tldr.component.html',
  styleUrl: './tldr.component.scss',
  imports: []
})
export class TldrComponent {
  items = input<string[]>([]);
  title = input<string>('TL;DR');
}
