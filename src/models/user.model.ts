import { Schema, model } from "mongoose";
import { user } from "../constant/mdul-name";

interface IUser {
  phone: string;
  password: string;
  name: string;
}

const schema = new Schema<IUser>({
  phone: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  name: String,
});

export default model<IUser>(user, schema);
