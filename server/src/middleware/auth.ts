import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface CostumRequest extends Request {
  userId: any;
}
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as CostumRequest).userId = (decoded as any).id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
