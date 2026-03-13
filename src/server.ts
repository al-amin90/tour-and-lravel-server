import app from './app';
import mongoose from 'mongoose';
import 'dotenv/config';
import config from './app/config';
import { Server } from 'http';

let server: Server;

const main = async () => {
  await mongoose.connect(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port  ${config.port}`);
  });
};

main().catch((error) => console.log(error));

process.on('unhandledRejection', () => {
  console.log(`unhandledRejection is detected, shutting down...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`unhandledRejection is detected, shutting down...`);
  process.exit(1);
});
