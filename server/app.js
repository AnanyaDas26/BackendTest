import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Importing routes
import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/users", userRoutes);

import { errorHandler } from "./middlewares/errorHandler.middlewares.js";
app.use(errorHandler);

export { app };