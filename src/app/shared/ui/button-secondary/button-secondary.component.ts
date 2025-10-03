import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-secondary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.scss'
})
export class ButtonSecondaryComponent {
  text = input<string>(''); // Текст кнопки
  size = input<'small' | 'medium' | 'large'>('medium');
  variant = input<'default' | 'ghost' | 'outline'>('default');
  color = input<'primary' | 'gray'>('primary');
  link = input<string>('#');
  external = input<boolean>(false);

  buttonClass = computed(() =>
    `btn-secondary btn-secondary--${this.size()} btn-secondary--${this.variant()} btn-secondary--${this.color()}`
  );
}
