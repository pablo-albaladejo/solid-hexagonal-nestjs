import { CompanyService } from '../../company/application/company.service';
import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import { UserCreateRequest } from './dto/user-create-request.dto';
import { UserCreateResponse } from './dto/user-create-response.dto';
import { UserResponse } from './dto/user-response.dto';
import { UserMapper } from './user.mapper';

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private companyService: CompanyService
  ) {}

  async getUserById(id: string): Promise<UserResponse> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    const company = await this.companyService.getCompayById(user.companyId);
    return UserMapper.toUserResponse(user, company);
  }

  async createUser(userCreateRequest: UserCreateRequest): Promise<UserCreateResponse> {
    const newUser: User = this.generateUser(userCreateRequest);     
    await this.userRepository.saveUser(newUser);

    return UserMapper.toCreateUserResponse(newUser);
  }

  private generateUser(userCreateRequest: UserCreateRequest): User {
    const id = this.generateUniqueId();
    return { id, ...userCreateRequest };
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
