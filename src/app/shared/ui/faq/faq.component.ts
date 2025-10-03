import { Component, input, signal } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  imports: []
})
export class FaqComponent {
  title = input<string>('Frequently Asked Questions');
  description = input<string>('Get answers to the most common questions about crypto exchanges');
  items = input<FaqItem[]>([]);

  openItems = signal<Set<number>>(new Set());

  toggleItem(index: number): void {
    const current = this.openItems();
    if (current.has(index)) {
      current.delete(index);
    } else {
      current.add(index);
    }
    this.openItems.set(new Set(current));
  }

  isOpen(index: number): boolean {
    return this.openItems().has(index);
  }
}
