import express, { Request, Response } from 'express';
import useRouter from './module/user/user.router';
const app = express();

//middleware
app.use(express.json());
app.use('/api/user', useRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server is live 🎈',
  });
});

export default app;
