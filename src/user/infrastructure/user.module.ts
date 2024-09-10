import { CompanyService } from '../../company/application/company.service';
import { InMemoryCompanyRepository } from '../../company/infrastructure/inmemory-company.repository';
import { UserService } from '../application/user.service';
import { InMemoryUserRepository } from './inmemory-user.repository';
import { UserController } from './user.controller';

export class UserModule {
  static getControllers() {
    const companyRepository = new InMemoryCompanyRepository();
    const companyService = new CompanyService(companyRepository);
    
    const userRepository = new InMemoryUserRepository();
    const userService = new UserService(userRepository, companyService);
    const userController = new UserController(userService);
    
    return [userController];
  }
}