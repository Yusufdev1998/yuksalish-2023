import { Schema, model } from "mongoose";
import { lavozim } from "../constant/mdul-name";

interface ILavozim {
  nomi: string;
  user_id: string;
}

const schema = new Schema({
  nomi: String,
  user_id: String,
});

export default model<ILavozim>(lavozim, schema);
