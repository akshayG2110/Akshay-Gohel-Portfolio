/**
 * Navigation Configuration
 * 
 * This centralized configuration file manages all portfolio navigation items.
 * To add new sections in the future:
 * 1. Add a new entry to the NAVIGATION_ITEMS array
 * 2. Create a new component with the matching section id
 * 3. Import it in App.tsx
 * 
 * Example:
 * {
 *   id: 'blog',
 *   label: 'Blog',
 *   href: '#blog',
 *   enabled: true,
 *   component: 'Blog' // Component name to import dynamically if needed
 * }
 */

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  enabled: boolean;
  component?: string;
  external?: boolean;  // For external links
  newTab?: boolean;    // Open in new tab
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    enabled: true,
    component: 'Hero'
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
    enabled: true,
    component: 'About'
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills',
    enabled: true,
    component: 'Skills'
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    enabled: true,
    component: 'Projects'
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '#experience',
    enabled: true,
    component: 'Experience'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    enabled: true,
    component: 'Contact'
  },
  {
    id: 'resume',
    label: 'Resume',
    href: '/Akshay_Gohel_Resume.pdf',
    enabled: true,
    component: 'Resume',
    external: true,
    newTab: true
  },
  // Future sections can be added here with enabled: false until ready to use
  // {
  //   id: 'blog',
  //   label: 'Blog',
  //   href: '#blog',
  //   enabled: false,
  //   component: 'Blog'
  // },
  // {
  //   id: 'portfolio',
  //   label: 'Portfolio',
  //   href: '#portfolio',
  //   enabled: false,
  //   component: 'Portfolio'
  // }
];

/**
 * Get enabled navigation items
 * Filters out sections that are not yet enabled
 */
export const getEnabledNavItems = (): NavigationItem[] => {
  return NAVIGATION_ITEMS.filter(item => item.enabled);
};

/**
 * Get navigation item by id
 */
export const getNavItemById = (id: string): NavigationItem | undefined => {
  return NAVIGATION_ITEMS.find(item => item.id === id);
};

/**
 * Get all section ids (for tracking active sections)
 */
export const getSectionIds = (): string[] => {
  return getEnabledNavItems().map(item => item.id);
};
