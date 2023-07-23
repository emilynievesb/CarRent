import { Router } from "express";
import { obtenerTodosLosCarrosController } from "../controllers/getData.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerCarros", obtenerTodosLosCarrosController);
  return router;
};

export { getInitRoute };
