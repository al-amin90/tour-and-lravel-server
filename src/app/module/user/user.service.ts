import { IUser } from './user.interface';
import UserModal from './user.modal';

const createUserIntoDB = async (payload: IUser) => {
  const result = await UserModal.create(payload);
  return result;
};

const getUserFromDB = async () => {
  const result = await UserModal.find();
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await UserModal.findById(id);
  return result;
};

const updateSingleUserIntoDB = async (id: string, data: IUser) => {
  console.log('id', id);
  console.log('data', data);

  const result = await UserModal.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteSingleUserFromDB = async (id: string) => {
  const result = await UserModal.deleteOne({ _id: id });
  return result;
};

export default {
  createUserIntoDB,
  getUserFromDB,
  getSingleUserFromDB,
  updateSingleUserIntoDB,
  deleteSingleUserFromDB,
};
