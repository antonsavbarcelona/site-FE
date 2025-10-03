import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Импорт всех UI компонентов
import { TldrComponent } from '../../shared/ui/tldr/tldr.component';
import { KeyValueTableComponent, KeyValueTableItem } from '../../shared/ui/key-value-table/key-value-table.component';
import { ProsConsTableComponent, ProsConsItem } from '../../shared/ui/pros-cons-table/pros-cons-table.component';
import { MaterialComparisonTableComponent, MaterialComparisonColumn, MaterialComparisonRow } from '../../shared/ui/material-comparison-table/material-comparison-table.component';
import { FaqComponent, FaqItem } from '../../shared/ui/faq/faq.component';
import { ProsListComponent, ProsItem } from '../../shared/ui/pros-list/pros-list.component';
import { BulletListComponent } from '../../shared/ui/bullet-list/bullet-list.component';
import { ComparisonTableComponent } from '../../shared/ui/comparison-table/comparison-table.component';
import { TableOfContentsComponent } from '../../shared/ui/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-storybook',
  templateUrl: './storybook.component.html',
  styleUrl: './storybook.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TldrComponent,
    KeyValueTableComponent,
    ProsConsTableComponent,
    MaterialComparisonTableComponent,
    FaqComponent,
    ProsListComponent,
    BulletListComponent,
    ComparisonTableComponent,
    TableOfContentsComponent
  ]
})
export class StorybookComponent {

  // Sample data for TLDR component
  protected readonly tldrItems: string[] = [
    'This is a sample TL;DR item showcasing the component functionality',
    'Multiple items are supported with proper styling and spacing',
    'Perfect for quick summaries and key takeaways'
  ];

  // Sample data for Key-Value Table
  protected readonly keyValueItems: KeyValueTableItem[] = [
    { key: 'Platform Type', value: 'Centralized Exchange' },
    { key: 'Founded', value: '2012' },
    { key: 'Headquarters', value: 'San Francisco, USA' },
    { key: 'Supported Countries', value: '100+ countries worldwide' },
    { key: 'Trading Fees', value: '0.5% - 1.49% (varies by payment method)' }
  ];

  // Sample data for Pros & Cons Table
  protected readonly prosItems: ProsConsItem[] = [
    { text: 'User-friendly interface perfect for beginners' },
    { text: 'Strong regulatory compliance and security' },
    { text: 'Wide variety of supported cryptocurrencies' },
    { text: 'Educational resources and learning platform' },
    { text: 'Mobile app with full functionality' }
  ];

  protected readonly consItems: ProsConsItem[] = [
    { text: 'Higher fees compared to some competitors' },
    { text: 'Limited advanced trading features' },
    { text: 'Customer support can be slow during high traffic' },
    { text: 'Some features restricted in certain countries' }
  ];

  // Sample data for Material Comparison Table
  protected readonly comparisonColumns: MaterialComparisonColumn[] = [
    { key: 'feature', title: 'Feature', type: 'text' },
    { key: 'coinbase', title: 'Coinbase', type: 'text' },
    { key: 'kraken', title: 'Kraken', type: 'text' },
    { key: 'binance', title: 'Binance', type: 'text' }
  ];

  protected readonly comparisonRows: MaterialComparisonRow[] = [
    {
      feature: 'Trading Fees',
      coinbase: '0.5% - 1.49%',
      kraken: '0.16% - 0.26%',
      binance: '0.1% - 0.02%'
    },
    {
      feature: 'Supported Assets',
      coinbase: '200+',
      kraken: '190+',
      binance: '600+'
    },
    {
      feature: 'Security Rating',
      coinbase: 'Excellent',
      kraken: 'Excellent',
      binance: 'Very Good'
    }
  ];

  // Sample data for FAQ
  protected readonly faqItems: FaqItem[] = [
    {
      question: 'What is this Storybook page?',
      answer: 'This is a demonstration page showcasing all the reusable UI components available in our shared component library. It helps developers see how each component looks and behaves.'
    },
    {
      question: 'How do I use these components?',
      answer: 'Each component can be imported from the shared/ui directory. Check the TypeScript file of this page to see the import statements and required props for each component.'
    },
    {
      question: 'Can I customize the styling?',
      answer: 'Yes! Each component has its own SCSS file that can be modified. The components are designed to be flexible and customizable to match your design requirements.'
    },
    {
      question: 'Are these components responsive?',
      answer: 'Absolutely! All components are built with mobile-first responsive design principles and work seamlessly across different screen sizes.'
    }
  ];

  // Sample data for Pros List
  protected readonly prosListItems: ProsItem[] = [
    {
      title: 'Comprehensive Component Library',
      description: 'Our shared UI components cover a wide range of use cases from simple bullet lists to complex comparison tables, providing everything you need for content-rich pages.'
    },
    {
      title: 'Consistent Design System',
      description: 'All components follow the same design principles and color scheme, ensuring visual consistency across your entire application without additional effort.'
    },
    {
      title: 'Developer-Friendly',
      description: 'Each component is well-documented with TypeScript interfaces, making it easy for developers to understand required props and implement correctly.'
    }
  ];

  // Sample data for Bullet List
  protected readonly bulletItems: string[] = [
    'Clean and modern design that fits any website aesthetic',
    'TypeScript support with proper interfaces and type safety',
    'Responsive layout that adapts to different screen sizes',
    'Accessibility features built-in for better user experience',
    'Easy to customize and extend for specific use cases',
    'Performance optimized with minimal bundle size impact'
  ];

}
