import express from "express";
import { createAnteka, getAnketa } from "../components/anketa.controller";

const router = express.Router();

router.get("", getAnketa);
router.post("", createAnteka);

export default router;
