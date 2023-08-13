import express, { json } from "express";
import { config } from "dotenv";
config();
import dbConnection from "./connections/dbConnection";
import cookieParser from "cookie-parser";
import anketaRouter from "./routes/anketa.routes";
import fillialRouter from "./routes/fillial.routes";
import lavozimRouter from "./routes/lavozim.routes";
import { message, text_button, url } from "./constant/mdul-name";
const app = express();

dbConnection();
app.use(express.json({ limit: "30mb" }));
app.use(cookieParser());
app.use("/anketa", anketaRouter);
app.use("/filial", fillialRouter);
app.use("/lavozim", lavozimRouter);

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
