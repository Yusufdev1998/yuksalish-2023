import { Request, Response } from "express";
import userModel from "../models/user.model";
import jwt from "jsonwebtoken";
export const login = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({
        error: "phone and password are required",
      });
    }

    const user = await userModel.findOne(
      { phone, password },
      { __v: 0, password: 0 }
    );

    if (!user) {
      return res.status(400).json({
        error: "phone and password are incorrect",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "30d",
    });

    return res
      .cookie("token", token)
      .status(200)
      .json({
        ...user,
      });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};
