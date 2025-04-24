import UserModel, { User } from "../models/User";

export class UserRepository {
  static create(data: Partial<User>) {
    return UserModel.create(data);
  }
  static findByEmail(email: string) {
    return UserModel.findOne({ email });
  }
  static findById(id: string) {
    return UserModel.findById(id);
  }
}
