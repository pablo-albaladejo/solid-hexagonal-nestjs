import { Router } from 'express';
import { UserController } from './user.controller';

export function createUserRouter(userController: UserController ): Router {
  const router = Router();

  router.get('/:id', userController.getUserById );

  return router;
}