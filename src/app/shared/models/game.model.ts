export interface Game {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  provider?: string;
  tags?: string[];
}
