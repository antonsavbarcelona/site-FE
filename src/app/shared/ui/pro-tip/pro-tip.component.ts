import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pro-tip',
  standalone: true,
  imports: [],
  templateUrl: './pro-tip.component.html',
  styleUrl: './pro-tip.component.scss'
})
export class ProTipComponent {
  text = input.required<string>();
  title = input<string>('Pro Tip:');
}
