import { Schema, model } from "mongoose";

interface Ifilal {
  nomi: string;
  user_id: string;
  filial_type: number;
}

const schema = new Schema({
  nomi: {
    type: String,
    required: true,
  },
  user_id: String,
  filial_type: Number,
});

const filialModel = model<Ifilal>("filial", schema);

export default filialModel;
