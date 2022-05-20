export interface TeamsCardType {
  heuris?: TeamsCardData[];
  heuristech?: TeamsCardData[];
}

export interface TeamsCardData {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  twitterUrl: string;
  linkedin?: string;
  cv?: string;
  email?: string;
  slug?: { _type: string; current: string };
}

export interface SEOPropsType {
  seoData: SEOPropsData;
}

export interface SEOPropsData {
  name?: string;
  title: string;
  shortTitle?: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
  coverImage?: string;
  tags?: string[];
}
