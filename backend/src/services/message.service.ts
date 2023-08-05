import Message from '../models/message.model';

export async function createMessage(user: string, content: string) {
  const message = new Message({ user, content });
  return await message.save();
}

export async function getMessages() {
  return await Message.find().sort({ createdAt: -1 });
}
