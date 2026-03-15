import { ITour } from './tour.interface';
import TourModal from './tour.modal';

const createTourIntoDB = async (payload: ITour) => {
  const result = await TourModal.create(payload);
  return result;
};

const getTourInDB = async (query: Record<string, unknown>) => {
  const searchTerm = query?.searchTerm || '';

  const result = await TourModal.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { startLocation: { $regex: searchTerm, $options: 'i' } },
    ],
  });
  return result;
};

const getSingleTourInDB = async (id: string) => {
  const result = await TourModal.findById(id);
  return result;
};

const updateSingleTour = async (id: string, payload: ITour) => {
  const result = await TourModal.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteTourInDB = async (id: string) => {
  const result = await TourModal.deleteOne({ _id: id });
  return result;
};

const cancelOrderInDB = async (id: string) => {
  const cancelled = await TourModal.findById(id);
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
