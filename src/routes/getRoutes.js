import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerFacturaPorIdController,
  obtenerNovedadPorIdController,
  obtenerReportePorIdController,
  obtenerTodasLasFacturasController,
  obtenerTodasLasNacionalidadesController,
  obtenerTodasLasNovedadesController,
  obtenerTodasLasSedesController,
  obtenerTodosLosCarrosController,
  obtenerTodosLosEstadosVigenciaController,
  obtenerTodosLosHistorialesController,
  obtenerTodosLosReportesController,
  obtenerTodosLosRolesController,
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
  router.get("/obtenerReporte", obtenerReportePorIdController);
  router.get("/obtenerRoles", obtenerTodosLosRolesController);
  router.get("/obtenerSedes", obtenerTodasLasSedesController);
  return router;
};

export { getInitRoute };
