'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getMessages = exports.createMessage = void 0;
const message_model_1 = __importDefault(require('../models/message.model'));
async function createMessage(user, content) {
  const message = new message_model_1.default({ user, content });
  return await message.save();
}
exports.createMessage = createMessage;
async function getMessages() {
  return await message_model_1.default.find().sort({ createdAt: -1 });
}
exports.getMessages = getMessages;
