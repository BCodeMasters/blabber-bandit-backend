import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

async function connectDb() {
  const DB_Host = process.env.DB_HOST;

  try {
    await mongoose.connect(`mongodb://${DB_Host}:27017`, { dbName: 'chatapp' });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
}

mongoose.connection.on('error', (err) => {
  mongoose.disconnect();
  console.error('Could not connect to MongoDB', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('DB Disconnected !. Reconnecting starts in 2 secs...', 'app');
  setTimeout(() => {
    connectDb();
  }, 2000);
});

export { connectDb };
