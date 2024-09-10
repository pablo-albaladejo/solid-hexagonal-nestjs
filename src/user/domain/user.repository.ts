import { User } from './user.entity';

export interface UserRepository {
  getUserById(id: string): Promise<User | null>;
  saveUser(user: User): Promise<void>;
}
