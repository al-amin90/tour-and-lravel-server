import { ITour } from './tour.interface';
import TourModal from './tour.modal';

const createTourIntoDB = async (payload: ITour) => {
  const result = await TourModal.create(payload);
  return result;
};

const getTourInDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  const searchTerm = query?.searchTerm || '';

  const searchableFields = ['name', 'startLocation', 'locations'];

  const searchQuery = TourModal.find({
    $or: searchableFields?.map((filed) => ({
      [filed]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const filterQuery = searchQuery.find(queryObj);

  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;

  const skip = (page - 1) * limit;

  const paginationQuery = filterQuery.skip(skip).limit(limit);

  let sort;
  if (query?.sortOrder && query?.sortBy) {
    const sortBy = query?.sortBy;
    const sortOrder = query?.sortOrder;
    sort = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
  }
  console.log('sort', sort);

  const sortQuery = paginationQuery.sort(sort);

  let selects = '__v';
  if (query?.selects) {
    selects = (query?.selects as string)?.split(',').join(' ');
  }

  const result = await sortQuery.select(selects);

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
