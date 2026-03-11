import { model, Schema } from 'mongoose';
import { IBooking } from './booking.interface';

const bookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: [true, 'User is required'],
      index: true, // Add index for better query performance
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: 'Tour', // Reference to the Tour model
      required: [true, 'Tour is required'],
      index: true, // Add index for better query performance
    },
    bookedSlots: {
      type: Number,
      required: [true, 'Number of booked slots is required'],
      min: [1, 'At least 1 slot must be booked'],
    },
    bookingStatus: {
      type: String,
      enum: {
        values: ['pending', 'paid', 'cancelled'],
        message: '{VALUE} is not a valid booking status',
      },
      default: 'pending',
      required: [true, 'Booking status is required'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price cannot be negative'],
    },
  },
  {
    timestamps: true,
  },
);

bookingSchema.index({ user: 1, tour: 1 });

const BookingModal = model<IBooking>('Tour', bookingSchema);

export default BookingModal;
