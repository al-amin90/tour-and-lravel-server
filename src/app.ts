import express, { Request, Response } from 'express';
import userRouter from './module/user/user.router';

const app = express();

//parser
app.use(express.json());

app.use('/api/user', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

// ==========> global error handler
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
  });
});

export default app;
