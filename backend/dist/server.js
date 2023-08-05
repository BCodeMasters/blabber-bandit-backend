'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('reflect-metadata');
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const db_1 = require('./config/db');
const routes_1 = require('./routes');
const register_1 = require('./models/register');
const routes_2 = require('./routes');
const http_context_middleware_1 = require('./middlewares/http-context.middleware');
(0, register_1.registerModels)();
(0, routes_1.initAllRoutes)();
initServer();
function initServer() {
  const app = (0, express_1.default)();
  (0, db_1.connectDb)()
    .then(() => {
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    })
    .catch((err) => {
      console.error('Failed to connect to DB', err);
    });
  app.use(express_1.default.urlencoded({ extended: true }));
  //use set request
  app.use(http_context_middleware_1.setRequest);
  app.use((0, cors_1.default)());
  app.use(express_1.default.json());
  app.use(routes_2.router);
}
