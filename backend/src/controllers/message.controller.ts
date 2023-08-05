import * as MessageService from '../services/message.service';
import { Request, Response } from 'express';

export async function postMessage(req: Request, res: Response) {
  const { user, content } = req.body;
  const message = await MessageService.createMessage(user, content);
  res.json(message);
}

export async function getMessages(req: Request, res: Response) {
  const messages = await MessageService.getMessages();
  res.json(messages);
}
