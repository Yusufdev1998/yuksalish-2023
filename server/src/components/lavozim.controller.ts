import { Request, Response } from "express";
import lavozimModel from "../models/lavozim.model";
import { CostumRequest } from "../middleware/auth";

export const getAll = async (req: Request, res: Response) => {
  try {
    let { sorts, name } = req.query;
    const find: any = {};
    const sort: any = {};
    if (name) {
      find.nomi = { ["$regex"]: name, $options: "i" };
    }
    if (sorts) {
      sort.nomi = sorts;
    }
    const data = await lavozimModel.find({ ...find }, {}, { sort: sort });
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

export const createLavozim = async (req: Request, res: Response) => {
  try {
    const userId = (req as CostumRequest).userId;
    const { name } = req.body;

    const data = await lavozimModel.create({
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
