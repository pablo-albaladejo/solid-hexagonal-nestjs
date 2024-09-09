import { UserRepository } from '../../../domain/ports/user.repository';
import { User } from '../../../domain/entities/user.entity';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];

  async getUserById(id: string): Promise<User | null> {
    const user = this.users.find((u) => u.id === id);
    return user || null;
  }
}
