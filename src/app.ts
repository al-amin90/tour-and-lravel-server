import express, { Request, Response } from 'express';
import userRouter from './module/user/user.router';

const app = express();

app.use('/api/user', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

export default app;
