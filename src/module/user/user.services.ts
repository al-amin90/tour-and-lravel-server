import { IUser } from './user.interface';
import UserModel from './user.modal';

const createUserFromDB = async (value: IUser): Promise<IUser> => {
  const result = await UserModel.create(value);
  return result;
};

const getUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const userServices = {
  createUserFromDB,
  getUserFromDB,
};
