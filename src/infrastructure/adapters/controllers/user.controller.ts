import { Router } from 'express';
import { UserService } from '../../../application/services/user.service';
import { InMemoryUserRepository } from '../repositories/inmemory-user.repository';
import { UserRepository } from '../../../application/ports/user.repository';

const router = Router();

const userRepository: UserRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);

router.get('/:id', async (req, res) => {
  try {
    const user = await userService.getUserById (req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

export default router;
