import { injectable } from 'tsyringe';
import { UserService } from '../services/user.service';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class UserController {
  constructor(private _service: UserService) {}

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password, email } = req.body;
      const user = await this._service.createUser(username, password, email);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const user = await this._service.getUser(username, password);
    if (user) {
      // Passwords match
      res.json(user);
    } else {
      // Passwords don't match
      res.status(401).json({ error: 'Invalid username or password' });
    }
  }
}
