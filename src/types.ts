export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  gradient: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  strategy: string;
  outcome: string;
  feedback: string;
  clientName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  review: string;
  rating: number;
  location: string;
  avatarSeed: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface LegalInsight {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}
