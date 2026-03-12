import { IBooking } from './booking.interface';
import BookingModal from './booking.modal';

const createBookingIntoDB = async (payload: IBooking) => {
  const result = await BookingModal.create(payload);
  return result;
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
