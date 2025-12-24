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

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUserFromDB();
    res.status(200).json({
      status: true,
      message: 'Get User Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'failed to get user',
      error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.getSingleUserFromDB(id);
    res.status(200).json({
      status: true,
      message: 'Get Single User Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'failed to get single user',
      error,
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    const result = await userService.updateSingleUserIntoDB(id, payload);
    console.log('result', result);
    res.status(200).json({
      status: true,
      message: 'update Single User Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'failed to update Single User',
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.deleteSingleUserFromDB(id);
    res.status(200).json({
      status: true,
      message: 'delete User Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'failed to delete user',
      error,
    });
  }
};

export default {
  createUser,
  getUser,
  getSingleUser,
  updateSingleUser,
  deleteUser,
};
