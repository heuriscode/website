export interface TeamsCardType {
  heuris?: TeamsCardData[];
  heuristechs?: TeamsCardData[];
}

export interface TeamsCardData {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  twitterUrl: string;
  linkedinUrl: string;
}

export interface SEOPropsType {
  seoData: SEOPropsData;
}

export interface SEOPropsData {
  name?: string;
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
  coverImage?: string;
  tags?: string[];
}
