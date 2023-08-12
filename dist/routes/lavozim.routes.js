"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { login } from "../components/user.controller";
const lavozim_controller_1 = require("../components/lavozim.controller");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post("", auth_1.auth, lavozim_controller_1.createLavozim);
router.get("", lavozim_controller_1.getAll);
exports.default = router;
