import express from "express";
import { createAnketa, getAnketa } from "../controller/anketa.controller";

const anketaRoutes = express.Router();

anketaRoutes.get("/", getAnketa);
anketaRoutes.post("/", createAnketa);
export default anketaRoutes;
