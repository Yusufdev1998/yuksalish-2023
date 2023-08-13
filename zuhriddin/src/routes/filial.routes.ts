import express from "express";
import { getFilials, createFilial } from "../controller/anketa.filyal";

const routerFlial = express.Router();

routerFlial.get("/filials", getFilials);
routerFlial.post("/filials", createFilial);

export default routerFlial;
