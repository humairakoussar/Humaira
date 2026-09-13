export type PageId =
  | 'home'
  | 'about'
  | 'skills'
  | 'branding'
  | 'illustrations'
  | 'social'
  | 'packaging'
  | 'color-theory'
  | 'process'
  | 'services'
  | 'testimonials'
  | 'contact';

export type ThemeMode = 'pastel' | 'sunset' | 'midnight' | 'minimal';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'branding' | 'illustration' | 'social' | 'packaging';
  subtitle: string;
  description: string;
  fullDescription: string;
  client: string;
  year: string;
  duration: string;
  tools: string[];
  image: string;
  palette: { name: string; hex: string }[];
  tags: string[];
  metrics?: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
}

export interface SkillItem {
  name: string;
  category: 'software' | 'theory' | 'specialty';
  level: number;
  icon: string;
  experience: string;
  description: string;
  popularFor: string;
}

export interface PaletteShowcase {
  id: string;
  name: string;
  type: 'Complementary' | 'Analogous' | 'Triadic' | 'Monochromatic' | 'Split-Complementary';
  mood: string;
  colors: {
    name: string;
    hex: string;
    role: string;
    isDarkText?: boolean;
  }[];
  description: string;
  usageAdvice: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  price: string;
  turnaround: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  idealFor: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}
