import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerTodasLasFacturasController,
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
  router.get("/obtenerFacturas", obtenerTodasLasFacturasController);
  return router;
};

export { getInitRoute };
