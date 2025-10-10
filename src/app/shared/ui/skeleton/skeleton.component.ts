import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  // Массив для @for
  readonly skeletonItems = Array(6).fill(0).map((_, i) => i);
}
