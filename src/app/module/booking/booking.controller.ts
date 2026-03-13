import { Request, Response } from 'express';
import mongoose from 'mongoose';
import bookingService from './booking.service';
import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import status from 'http-status';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await bookingService.createBookingIntoDB(payload);

  SendResponse(res, {
    statusCode: status.OK,
    message: 'Booking Create Successfully',
    data: result,
  });
});

const getBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingService.getBookingInDB();
    res.status(200).json({
      success: true,
      message: 'Booking Get all Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Booking not get Successfully',
      data: error,
    });
  }
};

const getSingleBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await bookingService.getSingleBookingInDB(id);
    res.status(200).json({
      success: true,
      message: 'Booking data get Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Booking data not get Successfully',
      data: error,
    });
  }
};

const updateSingleBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error(`Invalid id: ${id}`);
    }

    const result = await bookingService.updateSingleBooking(id, payload);
    res.status(200).json({
      success: true,
      message: 'Booking update Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Booking update not Successfully',
      data: error,
    });
  }
};

const deleteBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await bookingService.deleteBookingInDB(id);
    res.status(200).json({
      success: true,
      message: 'Booking delete Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Booking delete not Successfully',
      data: error,
    });
  }
};

export default {
  createBooking,
  getBooking,
  getSingleBooking,
  deleteBooking,
  updateSingleBooking,
};
