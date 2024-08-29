import { Router } from 'express';
import { UserService } from '../../../application/services/user.service';
import { CompanyService } from '../../../application/services/company.service';

export function createUserRouter(
  userService: UserService,
  companyService: CompanyService
): Router {
  const router = Router();

  router.get('/:id', async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).send('Error fetching user');
    }
  });

  return router;
}