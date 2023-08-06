import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db';
import { initAllRoutes } from './routes';
import { registerModels } from './models/register';
import { router as AppRoutes } from './routes';
import { setRequest } from './middlewares/http-context.middleware';

registerModels();
initAllRoutes();

initServer();

function initServer() {
  const app = express();

  connectDb()
    .then(() => {
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    })
    .catch((err) => {
      console.error('Failed to connect to Db', err);
    });
  app.use(express.urlencoded({ extended: true }));

  //use set request
  app.use(setRequest);
  app.use(cors());
  app.use(express.json());

  app.use(AppRoutes);
}
