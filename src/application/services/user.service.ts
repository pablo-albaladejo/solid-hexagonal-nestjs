import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../ports/user.repository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    return user;
  }
}
