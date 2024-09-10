import express, { Router, Express } from 'express';
import { createUserRouter } from './modules/user/infrastructure/user.controller';
import { InMemoryUserRepository } from './modules/user/infrastructure/inmemory-user.repository';
import { UserService } from './modules/user/application/user.service';
import { CompanyService } from './modules/company/application/company.service';
import { InMemoryCompanyRepository } from './modules/company/infrastructure/inmemory-company.repository';

function createRouter(): Router {
  const companyRepository = new InMemoryCompanyRepository();
  const companyService = new CompanyService(companyRepository);

  const userRepository = new InMemoryUserRepository();
  const userService = new UserService(userRepository, companyService);

  return createUserRouter(userService, companyService);
}



export const createServer = (): Express => {
  const server = express();
  const router = createRouter();
  server.use(router);
  return server;
}