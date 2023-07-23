import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerFacturaPorIdController,
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
  router.get("/obtenerFactura", obtenerFacturaPorIdController);
  return router;
};

export { getInitRoute };
