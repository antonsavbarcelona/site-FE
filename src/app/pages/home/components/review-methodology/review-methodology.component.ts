import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProTipComponent } from '../../../../shared/ui/pro-tip/pro-tip.component';

@Component({
  selector: 'app-review-methodology',
  standalone: true,
  imports: [CommonModule, ProTipComponent],
  templateUrl: './review-methodology.component.html',
  styleUrl: './review-methodology.component.scss'
})
export class ReviewMethodologyComponent {}
