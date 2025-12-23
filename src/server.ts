import app from './app';
import mongoose from 'mongoose';
import 'dotenv/config';
import config from './config';

const Server = async () => {
  await mongoose.connect(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port  ${config.port}`);
  });
};

Server().catch((error) => console.log(error));
