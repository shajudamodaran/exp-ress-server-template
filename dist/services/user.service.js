"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
class UserService {
    async createUser(name, email) {
        const user = await user_model_1.UserSchema.create({ name, email });
        return user;
    }
    async getUsers() {
        const users = await user_model_1.UserSchema.find();
        return users;
    }
}
exports.UserService = UserService;
