import { model, Schema, Document } from 'mongoose';

export interface UserModel extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<UserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const UserSchema = model<UserModel>('User', userSchema);