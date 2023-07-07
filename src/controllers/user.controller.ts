import { JsonController, Get, Post, Body } from 'routing-controllers';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';


@JsonController('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() user: UserModel): Promise<UserModel> {
    return this.userService.createUser(user.name, user.email);
  }
}
