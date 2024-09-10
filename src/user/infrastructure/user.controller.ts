import { Request, Response } from 'express';
import { UserService } from '../application/user.service';
import { UserCreateRequest } from '../application/dto/user-create-request.dto';
import { UserCreateResponse } from '../application/dto/user-create-response.dto';
export class UserController {
  constructor(private readonly userService: UserService) {}

  getUserById = async (req: Request, res: Response) => {
    const user = await this.userService.getUserById(req.params.id);
    res.json(user);
  };

  createUser = async (req: Request, res: Response) => {
    const { name, email, companyId } = req.body;
    const createdUser: UserCreateResponse = await this.userService.createUser({
      name,
      email,
      companyId
    });
    res.status(201).json(createdUser);
  };
}
