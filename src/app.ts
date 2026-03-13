/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import userRouter from './app/module/user/user.router';
import tourRouter from './app/module/tour/tour.router';
import bookingRouter from './app/module/booking/booking.router';
import NotFound from './app/middlewares/NotFound';
import GlobalErrorHandler from './app/middlewares/GlobalErrorHandler';

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

app.use(GlobalErrorHandler);
app.use(NotFound);

export default app;
