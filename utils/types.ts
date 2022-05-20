export interface TeamsCardProps {
  heuris?: TeamsData[];
  heuristech?: TeamsData[];
}

export interface TeamPageProps {
  team: TeamsData;
}

export interface TeamsData {
  name: string;
  role: string;
  image?: string;
  bio?: [];
  twitterUrl?: string;
  linkedin?: string;
  cv?: string;
  email?: string;
  slug?: { _type: string; current: string };
}

export interface SEOPropsType {
  seoData: SEOPropsData;
}

export interface SEOPropsData extends PostProps {
  name?: string;
}

export interface PostProps {
  title: string;
  shortTitle?: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
  coverImage?: string;
  // authorImage?: string;
  // mainImage?: string;
  tags?: string[];
}
