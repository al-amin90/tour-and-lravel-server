import { Request, Response } from 'express';
import tourService from './tour.service';
import mongoose from 'mongoose';

const createTour = async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const result = await tourService.createTourIntoDB(payload);
    res.status(200).json({
      success: true,
      message: 'Tour Create Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Tour not Create Successfully',
      data: error,
    });
  }
};

const getTour = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTourInDB();
    res.status(200).json({
      success: true,
      message: 'Tour Get all Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Tour not get Successfully',
      data: error,
    });
  }
};

const getSingleTour = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await tourService.getSingleTourInDB(id);
    res.status(200).json({
      success: true,
      message: 'Tour data get Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Tour data not get Successfully',
      data: error,
    });
  }
};

const updateSingleTour = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error(`Invalid id: ${id}`);
    }

    const result = await tourService.updateSingleTour(id, payload);
    res.status(200).json({
      success: true,
      message: 'Tour update Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Tour update not Successfully',
      data: error,
    });
  }
};

const deleteTour = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await tourService.deleteTourInDB(id);
    res.status(200).json({
      success: true,
      message: 'Tour delete Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Tour delete not Successfully',
      data: error,
    });
  }
};

const cancelOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await tourService.cancelOrderInDB(id);
    res.status(200).json({
      success: true,
      message: 'Tour order cancle Successfully',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      message: 'Tour order cancle not Successfully',
      data: error,
    });
  }
};

export default {
  createTour,
  getTour,
  getSingleTour,
  deleteTour,
  updateSingleTour,
  cancelOrder,
};
