import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerTodosLosCarrosController,
} from "../controllers/getData.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerCarros", obtenerTodosLosCarrosController);
  router.get("/obtenerCarro", obtenerCarroPorIdController);
  return router;
};

export { getInitRoute };
