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
  obtenerTodosLosSegurosController,
  obtenerTodosLosSoatController,
  obtenerTodosLosTecnicomecController,
  obtenerTodosLosTiposCarroController,
  obtenerTodosLosTiposDocumentoController,
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
  router.get("/obtenerSeguros", obtenerTodosLosSegurosController);
  router.get("/obtenerSoats", obtenerTodosLosSoatController);
  router.get("/obtenerTecnicomec", obtenerTodosLosTecnicomecController);
  router.get("/obtenerTiposCarros", obtenerTodosLosTiposCarroController);
  router.get("/obtenerTiposDoc", obtenerTodosLosTiposDocumentoController);
  return router;
};

export { getInitRoute };
