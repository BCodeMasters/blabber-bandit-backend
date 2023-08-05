import { container } from 'tsyringe';
import User from './user.model';

export function registerModels() {
  container.register('UserModel', { useValue: User });
}
