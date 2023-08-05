import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/user.controller';

const userRouter = Router();
function initUserRoutes() {
  const controller = container.resolve(UserController);

  userRouter.post(
    '/register',
    (...args) => controller.register(...args),
    () => {},
  );
}

export { userRouter, initUserRoutes };
