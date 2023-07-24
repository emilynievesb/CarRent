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
  obtenerTodosLosTiposNovedadController,
  obtenerTodosLosUsuariosController,
  obtenerUsuarioPorIdController,
} from "../controllers/getData.js";
import {
  obtenerCarroPorIdDTO,
  obtenerFacturaPorIdDTO,
  obtenerNovedadPorIdDTO,
  obtenerReportePorIdDTO,
  obtenerUsuarioPorIdDTO,
} from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/obtenerCarros",
    middlewareValidLog,
    obtenerTodosLosCarrosController
  );
  router.get(
    "/obtenerCarro",
    obtenerCarroPorIdDTO,
    obtenerCarroPorIdController
  );
  router.get(
    "/obtenerEstadosVigencia",
    middlewareValidLog,
    obtenerTodosLosEstadosVigenciaController
  );
  router.get(
    "/obtenerFacturas",
    middlewareValidLog,
    obtenerTodasLasFacturasController
  );
  router.get(
    "/obtenerFactura",
    middlewareValidLog,
    obtenerFacturaPorIdDTO,
    obtenerFacturaPorIdController
  );
  router.get(
    "/obtenerHistorialesNovedades",
    middlewareValidLog,
    obtenerTodosLosHistorialesController
  );
  router.get(
    "/obtenerNacionalidades",
    middlewareValidLog,
    obtenerTodasLasNacionalidadesController
  );
  router.get(
    "/obtenerNovedades",
    middlewareValidLog,
    obtenerTodasLasNovedadesController
  );
  router.get(
    "/obtenerNovedad",
    middlewareValidLog,
    obtenerNovedadPorIdDTO,
    obtenerNovedadPorIdController
  );
  router.get(
    "/obtenerReportes",
    middlewareValidLog,
    obtenerTodosLosReportesController
  );
  router.get(
    "/obtenerReporte",
    middlewareValidLog,
    obtenerReportePorIdDTO,
    obtenerReportePorIdController
  );
  router.get(
    "/obtenerRoles",
    middlewareValidLog,
    obtenerTodosLosRolesController
  );
  router.get(
    "/obtenerSedes",
    middlewareValidLog,
    obtenerTodasLasSedesController
  );
  router.get(
    "/obtenerSeguros",
    middlewareValidLog,
    obtenerTodosLosSegurosController
  );
  router.get(
    "/obtenerSoats",
    middlewareValidLog,
    obtenerTodosLosSoatController
  );
  router.get(
    "/obtenerTecnicomec",
    middlewareValidLog,
    obtenerTodosLosTecnicomecController
  );
  router.get(
    "/obtenerTiposCarros",
    middlewareValidLog,
    obtenerTodosLosTiposCarroController
  );
  router.get(
    "/obtenerTiposDoc",
    middlewareValidLog,
    obtenerTodosLosTiposDocumentoController
  );
  router.get(
    "/obtenerTiposNovedad",
    middlewareValidLog,
    obtenerTodosLosTiposNovedadController
  );
  router.get(
    "/obtenerUsuarios",
    middlewareValidLog,
    obtenerTodosLosUsuariosController
  );
  router.get(
    "/obtenerUsuario",
    middlewareValidLog,
    obtenerUsuarioPorIdDTO,
    obtenerUsuarioPorIdController
  );
  return router;
};

export { getInitRoute };
