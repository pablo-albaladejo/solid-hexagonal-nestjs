import express from 'express';
import { createUserRouter } from './adapters/controllers/user.controller';
import { InMemoryUserRepository } from './adapters/repositories/inmemory-user.repository';
import { InMemoryCompanyRepository } from './adapters/repositories/inmemory-company.repository';
import { UserService } from '../application/services/user.service';
import { CompanyService } from '../application/services/company.service';

const app = express();

const companyRepository = new InMemoryCompanyRepository();
const companyService = new CompanyService(companyRepository);

const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository, companyService);

app.use('/users', createUserRouter(userService, companyService));

export default app;