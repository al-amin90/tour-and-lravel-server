import { Request, Response } from 'express';

const NotFound = (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
    error: '',
  });
};

export default NotFound;
