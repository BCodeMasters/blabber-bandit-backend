'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.registerModels = void 0;
const tsyringe_1 = require('tsyringe');
const user_model_1 = __importDefault(require('./user.model'));
function registerModels() {
  tsyringe_1.container.register('UserModel', {
    useValue: user_model_1.default,
  });
}
exports.registerModels = registerModels;
