import { inject, injectable } from 'tsyringe';
import User from '../models/user.model';
import bcrypt from 'bcrypt';

@injectable()
export class UserService {
  constructor(@inject('UserModel') private _model) {}

  async createUser(username: string, password: string, email: string) {
    // hash the password
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new this._model({
        username,
        password: hashedPassword,
        email,
      });
      return await user.save();
    } catch (error) {
      throw error;
    }
  }

  async getUser(username: string, password: string) {
    const user = await this._model.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return null;
  }
}
