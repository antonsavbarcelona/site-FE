import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../shared/ui/button-primary/button-primary.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [ButtonPrimaryComponent]
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
