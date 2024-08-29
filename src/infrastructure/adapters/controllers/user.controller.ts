import { Router } from 'express';
import { UserService } from '../../../application/services/user.service';
import { InMemoryUserRepository } from '../repositories/inmemory-user.repository';
import { UserRepository } from '../../../application/ports/user.repository';
import { CompanyService } from '../../../application/services/company.service';
import { InMemoryCompanyRepository } from '../repositories/inmemory-company.repository';
import { CompanyRepository } from '../../../application/ports/company.repository';

const router = Router();

const companyRepository: CompanyRepository = new InMemoryCompanyRepository();
const companyService = new CompanyService(companyRepository);

const userRepository: UserRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository, companyService);

router.get('/:id', async (req, res) => {
  try {
    const user = await userService.getUserById (req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

export default router;
