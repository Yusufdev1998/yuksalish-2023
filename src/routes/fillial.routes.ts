import express from "express";
import { auth } from "../middleware/auth";
import { createFilial, getAll } from "../components/fillial.controller";

const router = express.Router();

router.post("", auth, createFilial);
router.get("", getAll);

export default router;
