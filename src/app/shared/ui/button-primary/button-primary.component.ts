import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  text = input<string>(''); // Текст кнопки
  size = input<'small' | 'medium' | 'large'>('medium');
  link = input<string>('#');
  external = input<boolean>(false);
  target = input<'_blank' | '_self'>('_blank');
  rel = input<string>('noopener noreferrer');

  buttonClass = computed(() => `btn-primary btn-primary--${this.size()}`);
}
