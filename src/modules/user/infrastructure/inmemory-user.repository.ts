import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.entity';

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
