import { Company } from '../../company/domain/company.entity';
import { User } from '../domain/user.entity';
import { UserCreateResponse } from './dto/user-create-response.dto';
import { UserResponse } from './dto/user-response.dto';

export class UserMapper {
  static toCreateUserResponse(user: User): UserCreateResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      companyId: user.companyId,
    };
  }
  static toUserResponse(user: User, company: Company): UserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      companyAddress: company.address,
      companyId: user.companyId,
    };
  }
}