import app from './app';
import 'dotenv/config';

const PORT = process.env.PORT;
console.log('PORT', PORT);

const Server = () => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

Server();
