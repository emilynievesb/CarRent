import express from "express";
import { initAPIRoutes } from "./routes/routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json()); //! Middleware para leer json
app.use(cookieParser()); //! Middleware para usar cookie-parser
app.use("/api", initAPIRoutes());

export default app;
