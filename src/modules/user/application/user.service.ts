import { CompanyService } from '../../company/application/company.service';
import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private companyService: CompanyService
  ) {}

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    const company = await this.companyService.getCompayByUserId(user.id);
    const companyAddress = company ? company.address : '';
    
    return { ...user, companyAddress };
  }
}
