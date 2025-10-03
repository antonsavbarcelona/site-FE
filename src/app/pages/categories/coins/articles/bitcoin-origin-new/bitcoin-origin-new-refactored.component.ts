import { Component, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContentsComponent } from '../../../../../shared/ui/table-of-contents/table-of-contents.component';
import { bitcoinReviewContent, ContentBlock } from './bitcoin-content.config';

@Component({
  selector: 'app-bitcoin-origin-new',
  templateUrl: './bitcoin-origin-new-refactored.component.html',
  styleUrl: './bitcoin-origin-new.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TableOfContentsComponent
  ]
})
export class BitcoinOriginNewComponent implements OnInit {

  // Mobile detection
  protected readonly isMobile = signal<boolean>(false);

  // Hero данные
  protected readonly article = {
    title: 'What is Bitcoin? — Bitcoin Review 2025',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Cryptocurrency Review'
  };

  // Контент из конфига
  protected readonly contentBlocks: ContentBlock[] = bitcoinReviewContent;

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }
}
