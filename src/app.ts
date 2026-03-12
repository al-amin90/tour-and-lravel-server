import express, { NextFunction, Request, Response } from 'express';
import userRouter from './module/user/user.router';
import tourRouter from './module/tour/tour.router';
import status from 'http-status';
import bookingRouter from './module/booking/booking.router';

const app = express();

//parser
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter);
app.use('/api/booking', bookingRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

// ==========> global error handler
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  });
});

app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
  });
});

export default app;
