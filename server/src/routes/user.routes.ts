import express from "express";
import { login } from "../components/user.controller";

const router = express.Router();

router.post("login", login);

export default router;
