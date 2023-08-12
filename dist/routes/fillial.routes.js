"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const fillial_controller_1 = require("../components/fillial.controller");
const router = express_1.default.Router();
router.post("", auth_1.auth, fillial_controller_1.createFilial);
router.get("", fillial_controller_1.getAll);
exports.default = router;
