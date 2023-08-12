import { Schema, model } from "mongoose";
import { user } from "../constant/mdul-name";

interface IUser {
  phone: string;
  password: string;
  name: string;
}

const schema = new Schema({
  phone: String,
  password: String,
  name: String,
});

export default model<IUser>(user, schema);
