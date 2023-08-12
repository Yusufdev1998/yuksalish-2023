import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ as string);
    console.log("db connection established");
  } catch (error: any) {
    console.log(error.message);
  }
};

export default dbConnection;
