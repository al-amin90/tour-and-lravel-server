import { ITour } from './booking.interface';
import BookingModal from './booking.modal';

const createTourIntoDB = async (payload: ITour) => {
  const result = await BookingModal.create(payload);
  return result;
};

const getTourInDB = async () => {
  const result = await BookingModal.find();
  return result;
};

const getSingleTourInDB = async (id: string) => {
  const result = await BookingModal.findById(id);
  return result;
};

const updateSingleTour = async (id: string, payload: ITour) => {
  const result = await BookingModal.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteTourInDB = async (id: string) => {
  const result = await BookingModal.deleteOne({ _id: id });
  return result;
};

const cancelOrderInDB = async (id: string) => {
  const cancelled = await BookingModal.findById(id);
  await cancelled?.cancelOrder();
  return cancelled;
};

export default {
  createTourIntoDB,
  getTourInDB,
  getSingleTourInDB,
  updateSingleTour,
  deleteTourInDB,
  cancelOrderInDB,
};
