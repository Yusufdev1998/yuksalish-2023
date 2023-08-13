import { Schema, model } from "mongoose";

export interface IAnketa {
  surname: string;
  name: string;
  middleName: string;
  birthday: string;
  position: string;
  position_nomi: string;
  talim_info: string;
  marriage_state: string;
  specialization: string;
  living_region_id: string;
  living_district_id: string;
  address: string;
  work_district_id: string;
  occupation_type: string;
  phone: string;
  phone2: string;
  languages: string[];
  experience: string;
  softwares: string[];
  relatives: string;
  salary: string;
  photo: string;
  user_id: number;
  marriage_state_nomi: string;
  living_region_id_nomi: string;
  living_district_id_nomi: string;
  work_district_id_nomi: string;
  occupation_type_nomi: string;
  status: string;
  fio: string;
}

const schema = new Schema<IAnketa>({
  surname: { type: String, required: true },
  name: { type: String, required: true },
  middleName: String,
  phone: String,
  phone2: String,
  photo: String,
  birthday: String,
  position: String,
  position_nomi: String,
  talim_info: String,
  marriage_state: String,
  specialization: String,
  living_region_id: String,
  living_district_id: String,
  address: String,
  work_district_id: String,
  occupation_type: String,
  languages: [String],
  experience: String,
  softwares: [String],
  relatives: String,
  salary: String,
  user_id: Number,
  marriage_state_nomi: String,
  living_region_id_nomi: String,
  living_district_id_nomi: String,
  work_district_id_nomi: String,
  occupation_type_nomi: String,
  status: String,
  fio: String,
});

const AnketaModel = model<IAnketa>("Anketa", schema);
export default AnketaModel;
