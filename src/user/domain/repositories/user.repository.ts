import { User } from '../entities/user.entity';

export interface UserRepository {
  create(user: User): Promise<string>;
  delete(id: string): Promise<User>;
  getAllUsers(): Promise<any>;
  getUserById(id: string): Promise<User>;
  getUserByEmail(id: string): Promise<User>;
  update(id: string, user: User): Promise<User>;
}
