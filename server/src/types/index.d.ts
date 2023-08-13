declare global {
  namespace Express {
    interface Request {
      userId?: ObjectId;
    }
  }
}
