import { userRouter, initUserRoutes } from './user.routes';
import * as express from 'express';

const router = express.Router();

function initAllRoutes() {
  initUserRoutes();
  router.use('/api/user', userRouter);
}

export { router, initAllRoutes };
