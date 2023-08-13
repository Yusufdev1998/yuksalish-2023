import { Request, Response } from "express";
// import FillialModel from "../models/fillial.madel";
import { CostumRequest } from "../middleware/auth";
import filialModel from "../models/fillial.madel";

export const getAll = async (req: Request, res: Response) => {
  try {
    let { search, name } = req.query;
    const find: any = {};
    const sort: any = {};

    if (name) {
      find.name = { ["$regax"]: search, $options: "i" };
    }
    if (search) {
      sort.name = name;
    }

    const data = await filialModel.find({ ...find }, {}, { sort: sort });

    res.send({
      succes: true,
      data,
    });
  } catch (error: any) {
    res.send({
      succes: false,
      message: error.message,
    });
  }
};

export const createFilial = async (req: Request, res: Response) => {
  try {
    const userId = (req as CostumRequest).userId;
    const { name } = req.body;

    const data = await filialModel.create({
      name: name,
      user_id: userId,
    });

    res.send({
      succes: true,
      data,
    });
  } catch (error: any) {
    res.send({
      succes: false,
      message: error.message,
    });
  }
};
