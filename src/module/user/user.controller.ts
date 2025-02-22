import { Request, Response } from 'express';
import { userServices } from './user.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await userServices.createUserFromDB(payload);

    res.json({
      status: 200,
      message: 'User create successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: 'Something went wrong',
      error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUserFromDB();

    res.json({
      status: 200,
      message: 'User getting successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: 'Something went wrong',
      error,
    });
  }
};

export const userController = {
  createUser,
  getUser,
};
