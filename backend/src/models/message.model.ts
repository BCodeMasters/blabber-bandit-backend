import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = model('Message', MessageSchema);

export default Message;
