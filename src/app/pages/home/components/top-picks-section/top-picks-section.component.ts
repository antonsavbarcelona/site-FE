import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardLargeComponent } from '../../../../shared/ui/article-card-large/article-card-large.component';
import { LargeArticle, SectionHeader } from '../../home-content.config';

@Component({
  selector: 'app-top-picks-section',
  standalone: true,
  imports: [
    CommonModule,
    ArticleCardLargeComponent
  ],
  templateUrl: './top-picks-section.component.html',
  styleUrl: './top-picks-section.component.scss'
})
export class TopPicksSectionComponent {
  @Input({ required: true }) header!: SectionHeader;
  @Input({ required: true }) articles!: LargeArticle[];
}
