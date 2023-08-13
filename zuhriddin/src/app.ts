import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes";

import cors from "cors";
import path from "path";
import anketaRoutes from "./routes/anketa.routes";
import routerFlial from "./routes/filial.routes";

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));

app.use(cookieParser());
// app.use("/restaurant", restaurantRoutes);
// app.use("/reservations", auth, reservationRoutes);
// app.use("/review", auth, reviewRouter);
app.use("/", anketaRoutes);
app.use("/anketa", anketaRoutes);

app.use("/", routerFlial);
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
export default app;
