import { Component, input } from '@angular/core';

export interface ProsConsItem {
  text: string;
}

@Component({
  selector: 'app-pros-cons-table',
  standalone: true,
  imports: [],
  templateUrl: './pros-cons-table.component.html',
  styleUrl: './pros-cons-table.component.scss'
})
export class ProsConsTableComponent {
  title = input<string>('Commissions and licenses');
  description = input<string>('Here you will find information on commissions, licenses, user support methods and other important parameters.');
  pros = input<ProsConsItem[]>([]);
  cons = input<ProsConsItem[]>([]);
  prosTitle = input<string>('Pluses');
  consTitle = input<string>('Minuses');
}
