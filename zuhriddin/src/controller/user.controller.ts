import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model";
export async function login(req: Request, res: Response) {
  try {
    const user = await userModel.findOne({
      password: req.body.password,
      phone: req.body.phone,
    });

    if (user) {
      const token = jwt.sign({ id: user.id }, "secret", {
        expiresIn: "30d",
      });
      res.cookie("token", token, { httpOnly: true, secure: true });
      res.send("token bor");
    } else {
      res.status(400).send({ message: "User not found" });
    }
  } catch (error) {}
}
