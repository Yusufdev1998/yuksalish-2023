import { Schema, model } from "mongoose";
import { filial } from "../constant/mdul-name";

interface IFillial {
  nomi: string;
  user_id: string;
  filial_type: number;
}

const schema = new Schema({
  nomi: String,
  user_id: String,
  filial_type: Number,
});

const filialModel = model<IFillial>(filial, schema);

export default filialModel;
