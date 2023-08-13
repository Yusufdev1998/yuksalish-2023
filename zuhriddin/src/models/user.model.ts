import mongoose, { Schema } from "mongoose";

export interface IUser {
  name: string;
  phone: string;
  password: string;
  save(): Promise<IUser>;
}

const userSchema = new Schema<IUser>(
  {
    name: String,
    phone: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model<IUser>("user", userSchema);

export default userModel;
