import { Request, Response } from 'express';
import userService from './user.service';
import SendResponse from '../../utils/SendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await userService.createUserIntoDB(payload);

  SendResponse(res, {
    statusCode: status.CREATED,
    message: 'Create User Successfully',
    data: result,
  });
});

const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getUserFromDB();

  SendResponse(res, {
    statusCode: status.OK,
    message: 'Get User Successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await userService.getSingleUserFromDB(id);

  SendResponse(res, {
    statusCode: status.OK,
    message: 'Get Single User Successfully',
    data: result,
  });
});

const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  const result = await userService.updateSingleUserIntoDB(id, payload);
  console.log('result', result);

  SendResponse(res, {
    statusCode: status.CREATED,
    message: 'update Single User Successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await userService.deleteSingleUserFromDB(id);

  SendResponse(res, {
    statusCode: status.OK,
    message: 'delete User Successfully',
    data: result,
  });
});

export default {
  createUser,
  getUser,
  getSingleUser,
  updateSingleUser,
  deleteUser,
};
