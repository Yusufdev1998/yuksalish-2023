import express from "express";
// import { login } from "../components/user.controller";
import { createLavozim, getAll } from "../components/lavozim.controller";
import { auth } from "../middleware/auth";

const router = express.Router();

router.post("", auth, createLavozim);
router.get("", getAll);

export default router;
