import { Router } from "express";
import {
  obtenerCarroPorIdController,
  obtenerFacturaPorIdController,
  obtenerTodasLasFacturasController,
  obtenerTodasLasNacionalidadesController,
  obtenerTodasLasNovedadesController,
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
  router.get("/obtenerNovedades", obtenerTodasLasNovedadesController);
  return router;
};

export { getInitRoute };
