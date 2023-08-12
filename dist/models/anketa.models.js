"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mdul_name_1 = require("../constant/mdul-name");
const schema = new mongoose_1.Schema({
    surname: String,
    name: String,
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
const anketaModel = (0, mongoose_1.model)(mdul_name_1.anketa, schema);
exports.default = anketaModel;
