export interface ITour {
  name: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage: string;
  image: string[];
  startDate?: Date;
  startLocation: string;
  locations: string[];
  slug?: string;
}
