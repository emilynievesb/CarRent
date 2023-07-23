import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerTodosLosCarrosController,
  obtenerTodosLosEstadosVigenciaController,
} from "../controllers/getData.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerCarros", obtenerTodosLosCarrosController);
  router.get("/obtenerCarro", obtenerCarroPorIdController);
  router.get(
    "/obtenerEstadosVigencia",
    obtenerTodosLosEstadosVigenciaController
  );
  return router;
};

export { getInitRoute };
