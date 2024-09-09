import express, { Router, Express } from 'express';
import { createUserRouter } from './adapters/controllers/user.controller';
import { InMemoryUserRepository } from './adapters/repositories/inmemory-user.repository';
import { InMemoryCompanyRepository } from './adapters/repositories/inmemory-company.repository';
import { UserService } from '../application/services/user.service';
import { CompanyService } from '../application/services/company.service';

export function createRouter(): Router {
    const companyRepository = new InMemoryCompanyRepository();
  const companyService = new CompanyService(companyRepository);

  const userRepository = new InMemoryUserRepository();
  const userService = new UserService(userRepository, companyService);

  return createUserRouter(userService, companyService);
}

export function createServer(router: Router): Express {
  const server = express();
  server.use(router);
  return server;
}
