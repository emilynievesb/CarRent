import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerFacturaPorIdController,
  obtenerNovedadPorIdController,
  obtenerTodasLasFacturasController,
  obtenerTodasLasNacionalidadesController,
  obtenerTodasLasNovedadesController,
  obtenerTodosLosCarrosController,
  obtenerTodosLosEstadosVigenciaController,
  obtenerTodosLosHistorialesController,
  obtenerTodosLosReportesController,
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
  router.get("/obtenerNovedades", obtenerTodasLasNovedadesController);
  router.get("/obtenerNovedad", obtenerNovedadPorIdController);
  router.get("/obtenerReportes", obtenerTodosLosReportesController);
  return router;
};

export { getInitRoute };
