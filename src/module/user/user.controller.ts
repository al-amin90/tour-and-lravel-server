import { Request, Response } from 'express';
import UserModal from './user.modal';

const createUser = async (req: Request, res: Response) => {
  const payload = req.body;

  const result = UserModal.create(payload);
  res.status(200).json({
    status: true,
    message: 'Create User Successfully',
    data: result,
  });
};

export default {
  createUser,
};
