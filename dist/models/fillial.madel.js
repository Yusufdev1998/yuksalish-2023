"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mdul_name_1 = require("../constant/mdul-name");
const schema = new mongoose_1.Schema({
    nomi: String,
    user_id: String,
    filial_type: Number,
});
const filialModel = (0, mongoose_1.model)(mdul_name_1.filial, schema);
exports.default = filialModel;
