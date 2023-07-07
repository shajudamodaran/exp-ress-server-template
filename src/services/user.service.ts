import { UserSchema, UserModel } from "../models/user.model";


export class UserService {
  async createUser(name: string, email: string): Promise<UserModel> {
    const user = await UserSchema.create({ name, email });
    return user;
  }

  async getUsers(): Promise<UserModel[]> {
    const users = await UserSchema.find();
    return users;
  }
}