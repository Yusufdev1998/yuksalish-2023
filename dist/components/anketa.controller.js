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
exports.createAnteka = exports.getAnketa = void 0;
const anketa_models_1 = __importDefault(require("../models/anketa.models"));
const getAnketa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = req.query;
        let one = {};
        let two = {};
        Object.keys(query).forEach((item) => {
            if (item === "languages") {
                one[item] = { $element: { $regex: query[item], $options: "i" } };
            }
            else if (item === "softwares") {
                one[item] = { $element: { $regex: `${query[item]}`, $options: "i" } };
            }
            else if (item.includes("sort")) {
                let newItem = item.split("_")[1];
                two["sort"] = { [`${newItem}`]: query[item] * 1 };
            }
            else if (item === "limit" || item === "skip") {
                two[item] = query[item] * 1;
            }
            else {
                one[item] = { $regex: query[item], $options: "i" };
            }
        });
        const data = yield anketa_models_1.default.find(one, {}, two);
        res.send({ data, succes: true });
    }
    catch (error) {
        console.log(error);
        res.send({ error: error.message, succes: false });
    }
});
exports.getAnketa = getAnketa;
const createAnteka = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const data = yield anketa_models_1.default.create(body);
        res.send({ data, succes: true });
    }
    catch (error) {
        res.send({ error: error.message, succes: false });
    }
});
exports.createAnteka = createAnteka;
