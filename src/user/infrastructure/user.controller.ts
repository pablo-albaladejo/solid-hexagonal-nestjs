import { Request, Response } from 'express';
import { UserService } from '../application/user.service';

export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  getUserById = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.getUserById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).send('Error fetching user');
    }
  };
}