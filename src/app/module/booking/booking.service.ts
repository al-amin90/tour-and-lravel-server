import mongoose from 'mongoose';
import TourModal from '../tour/tour.modal';
import { IBooking } from './booking.interface';
import BookingModal from './booking.modal';

const createBookingIntoDB = async (payload: IBooking) => {
  const { bookedSlots, tour } = payload;

  const isTourExists = await TourModal.findById(tour);

  if (!isTourExists) {
    throw new Error('Tour Not found');
  }

  payload.totalPrice = isTourExists.price * bookedSlots;

  if (isTourExists.availableSeats < bookedSlots) {
    throw new Error('Not Enough Seats Available');
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const result = await BookingModal.create([payload], { session });
    if (!result[0]) {
      throw new Error('Failed to Create Booking');
    }

    const updateTour = await TourModal.findByIdAndUpdate(
      tour,
      { $inc: { availableSeats: -bookedSlots } },
      { new: true, session },
    );

    if (!updateTour) {
      throw new Error('Failed to update tour');
    }

    await session.commitTransaction();

    return result[0];
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};

const getBookingInDB = async () => {
  const result = await BookingModal.find();
  return result;
};

const getSingleBookingInDB = async (id: string) => {
  const result = await BookingModal.findById(id);
  return result;
};

const updateSingleBooking = async (id: string, payload: IBooking) => {
  const result = await BookingModal.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteBookingInDB = async (id: string) => {
  const result = await BookingModal.deleteOne({ _id: id });
  return result;
};

export default {
  createBookingIntoDB,
  getBookingInDB,
  getSingleBookingInDB,
  updateSingleBooking,
  deleteBookingInDB,
};
