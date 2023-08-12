"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilial = exports.getAll = void 0;
const fillial_madel_1 = __importDefault(require("../models/fillial.madel"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { search, name } = req.query;
        const find = {};
        const sort = {};
        if (name) {
            find.name = { ["$regax"]: search, $options: "i" };
        }
        if (search) {
            sort.name = name;
        }
        const data = yield fillial_madel_1.default.find(Object.assign({}, find), {}, { sort: sort });
        res.send({
            succes: true,
            data,
        });
    }
    catch (error) {
        res.send({
            succes: false,
            message: error.message,
        });
    }
});
exports.getAll = getAll;
const createFilial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { name } = req.body;
        const data = yield fillial_madel_1.default.create({
            name: name,
            user_id: userId,
        });
        res.send({
            succes: true,
            data,
        });
    }
    catch (error) {
        res.send({
            succes: false,
            message: error.message,
        });
    }
});
exports.createFilial = createFilial;
