export interface Place {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: CategoryId;
  description: string;
  shortDescription: string;
  latitude: number;
  longitude: number;
  images: string[];
  tags: string[];
  featured?: boolean;
  address: string;
  addressEn: string;
  openingHours?: string;
  bestTime?: string;
  historicalEra?: string;
  ticketPrice?: string;
  googleMapsUrl?: string;
}

export type CategoryId = 'historical' | 'cafes' | 'restaurants' | 'nature' | 'cultural' | 'photography';

export interface Category {
  id: CategoryId;
  name: string;
  nameEn: string;
  iconName: string;
  description: string;
  image: string;
  color: string;
}

export interface EditorialStory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export type ViewMode = 'grid' | 'list';
export type SortOption = 'popular' | 'name-asc' | 'category';
