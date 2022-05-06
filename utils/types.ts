export type TeamsCardType = {
  heuris?: TeamsCardData[];
  heuristechs?: TeamsCardData[];
};

export type TeamsCardData = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  twitterUrl: string;
  linkedinUrl: string;
};
