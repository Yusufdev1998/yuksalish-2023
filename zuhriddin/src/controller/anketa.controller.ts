import { Request, Response } from "express";
import AnketaModel from "../models/anketa.model";

export const getAnketa = async (req: Request, res: Response) => {
  try {
    const { total, skip, limit } = req.query;

    let query = {};
    if (total === "All") {
      query = {};
    }

    const anketa = await AnketaModel.find(query)
      .skip(Number(skip))
      .limit(Number(limit));

    res.json(anketa);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const createAnketa = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const anketa = await AnketaModel.create(data);
    res.json(anketa);
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ message: "Not create post" });
  }
};
