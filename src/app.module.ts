import express, { Express, Router } from 'express';

import { createUserRouter } from './user/infrastructure/user.routes';
import { UserModule } from './user/infrastructure/user.module';

export const createServer = (): Express => {
  const server = express();
  server.use(express.json());

  const routes = registerRoutes();
  routes.forEach(route => server.use(route));

  return server;
};

const registerRoutes = (): Router[] => {
  const userControllers = UserModule.getControllers();

  return [...userControllers.map((controller) => createUserRouter(controller))];
};
