import { Schema, model, Document } from "mongoose";

export interface User extends Document {
  email: string;
  passwordHash: string;
  roles: string[];
}

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  roles: { type: [String], default: ["user"] },
});

userSchema.index({ email: 1 });

export default model<User>("User", userSchema);
