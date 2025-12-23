import { IUser } from './user.interface';
import UserModal from './user.modal';

const createUserIntoDB = async (payload: IUser) => {
  const result = await UserModal.create(payload);
  return result;
};

export default {
  createUserIntoDB,
};
