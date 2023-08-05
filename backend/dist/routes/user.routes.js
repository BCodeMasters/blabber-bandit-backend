'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.initUserRoutes = exports.userRouter = void 0;
const express_1 = require('express');
const tsyringe_1 = require('tsyringe');
const user_controller_1 = require('../controllers/user.controller');
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
function initUserRoutes() {
  const controller = tsyringe_1.container.resolve(
    user_controller_1.UserController,
  );
  userRouter.post(
    '/register',
    (...args) => controller.register(...args),
    () => {},
  );
}
exports.initUserRoutes = initUserRoutes;
