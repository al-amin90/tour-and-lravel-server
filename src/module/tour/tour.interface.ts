import { Document } from 'mongoose';

export interface ITour extends Document {
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
  order: 'cancelled' | 'active';

  cancelOrder(): Promise<ITour>;
}
