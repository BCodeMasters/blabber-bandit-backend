'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require('mongoose'));
async function connectDb() {
  console.log('connectDb');
  try {
    await mongoose_1.default.connect('mongodb://mongo:27017', {
      dbName: 'chatapp',
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
}
exports.connectDb = connectDb;
mongoose_1.default.connection.on('error', (err) => {
  mongoose_1.default.disconnect();
});
mongoose_1.default.connection.on('disconnected', () => {
  console.log('DB Disconnected !. Reconnecting starts in 2 secs...', 'app');
  setTimeout(() => {
    connectDb();
  }, 2000);
});
