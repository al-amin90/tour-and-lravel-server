import { model, Schema } from 'mongoose';
import { ITour } from './tour.interface';

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    require: true,
  },
  durationHours: {
    type: Number,
    require: true,
  },
  averageRating: {
    type: Number,
    default: 5,
  },
  price: {
    type: Number,
    require: true,
  },
  coverImage: {
    type: String,
    require: true,
  },
  image: [String],
  startDate: { type: Date },
  startLocation: String,
  locations: [String],
  slug: String,
});

const TourModal = model<ITour>('Tour', tourSchema);

export default TourModal;
