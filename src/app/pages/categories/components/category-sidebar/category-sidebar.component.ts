import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface SidebarData {
  popularArticles?: PopularArticle[];
  relatedCategories?: RelatedCategory[];
  showNewsletter?: boolean;
  showBestForUK?: boolean;
  customBlocks?: CustomBlock[];
}

export interface PopularArticle {
  title: string;
  category: string;
  date: string;
  link: string;
}

export interface RelatedCategory {
  name: string;
  link: string;
  description?: string;
}

export interface CustomBlock {
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'cta';
  link?: string;
  buttonText?: string;
}

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrl: './category-sidebar.component.scss',
  standalone: true,
  imports: [RouterLink]
})
export class CategorySidebarComponent {
  data = input<SidebarData>({});
}
