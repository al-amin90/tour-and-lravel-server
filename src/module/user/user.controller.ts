import { Request, Response } from 'express';
import userService from './user.service';

const createUser = async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const result = await userService.createUserIntoDB(payload);
    res.status(200).json({
      status: true,
      message: 'Create User Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'failed to create user',
      error,
    });
  }
};

export default {
  createUser,
};
