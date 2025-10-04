import { BreadcrumbItem } from '../ui/breadcrumbs/breadcrumbs.component';

// Mapping category paths to display names
const categoryLabels: Record<string, string> = {
  'guides': 'Guides',
  'coins': 'Coins',
  'security': 'Security & Taxes',
  'exchanges': 'Exchanges',
  'learn': 'Learn'
};

// Mapping category paths to icons
const categoryIcons: Record<string, string> = {
  'guides': '📖',
  'coins': '₿',
  'security': '🛡️',
  'exchanges': '🏦',
  'learn': '🎓'
};

/**
 * Generate breadcrumbs from URL path
 * Example: /security/crypto-risks → Home / Security & Taxes / Crypto Risks
 */
export function generateBreadcrumbs(
  currentPath: string,
  customArticleTitle?: string
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', link: '/home', icon: '🏠' }
  ];

  // Remove leading/trailing slashes and split
  const segments = currentPath.replace(/^\/|\/$/g, '').split('/');

  // If we're on home page, return just home
  if (segments.length === 1 && segments[0] === 'home') {
    return breadcrumbs;
  }

  // Process each segment
  segments.forEach((segment, index) => {
    // Skip 'home' segment
    if (segment === 'home') return;

    const isCategory = index === 0;
    const isArticle = index === 1;

    if (isCategory) {
      // Add category breadcrumb
      const categoryLabel = categoryLabels[segment] || capitalize(segment);
      const categoryIcon = categoryIcons[segment];
      
      breadcrumbs.push({
        label: categoryLabel,
        link: `/${segment}`,
        icon: categoryIcon
      });
    } else if (isArticle) {
      // Add article breadcrumb (last item, no link)
      const articleTitle = customArticleTitle || formatArticleTitle(segment);
      
      breadcrumbs.push({
        label: articleTitle
      });
    }
  });

  return breadcrumbs;
}

/**
 * Format article slug to readable title
 * Example: how-to-buy-eth-uk → How to Buy ETH UK
 */
function formatArticleTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => {
      // Keep acronyms uppercase (BTC, ETH, UK, etc.)
      if (word.length <= 3 && word === word.toUpperCase()) {
        return word;
      }
      // Capitalize first letter of other words
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * Capitalize first letter
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
