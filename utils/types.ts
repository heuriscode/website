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
