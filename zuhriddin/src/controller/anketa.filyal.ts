import { Request, Response } from "express";
import FilialModel from "../models/filial.model";

export const getFilials = async (req: Request, res: Response) => {
  try {
    const filials = await FilialModel.find({});
    res.json(filials);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const createFilial = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const filial = await FilialModel.create(data);
    res.json(filial);
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ message: "Failed to create filial" });
  }
};
