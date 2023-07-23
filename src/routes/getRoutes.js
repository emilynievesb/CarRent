import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerFacturaPorIdController,
  obtenerTodasLasFacturasController,
  obtenerTodasLasNacionalidadesController,
  obtenerTodosLosCarrosController,
  obtenerTodosLosEstadosVigenciaController,
  obtenerTodosLosHistorialesController,
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
  router.get(
    "/obtenerHistorialesNovedades",
    obtenerTodosLosHistorialesController
  );
  router.get("/obtenerNacionalidades", obtenerTodasLasNacionalidadesController);
  return router;
};

export { getInitRoute };
