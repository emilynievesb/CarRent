import { Router } from "express";
import {
  agregarCarroController,
  agregarNacionalidadController,
  agregarRolController,
  agregarTipoDocumentoController,
  agregarUsuarioController,
  agregarEstadoVigenciaController,
  agregarSoatController,
  agregarSeguroController,
  agregarTecnicomecController,
  agregarTipoNovedadController,
  agregarTipoCarroController,
  agregarSedeController,
  agregarNovedadController,
  agregarHistorialNovedadesController,
  agregarReporteAlquilerController,
  agregarFacturaController,
} from "../controllers/postData.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarCarro", agregarCarroController);
  router.post("/agregarRol", agregarRolController);
  router.post("/agregarTipoDocumento", agregarTipoDocumentoController);
  router.post("/agregarNacionalidad", agregarNacionalidadController);
  router.post("/agregarUsuario", agregarUsuarioController);
  router.post("/agregarEstadoVigencia", agregarEstadoVigenciaController);
  router.post("/agregarSoat", agregarSoatController);
  router.post("/agregarSeguro", agregarSeguroController);
  router.post("/agregarTecnicomec", agregarTecnicomecController);
  router.post("/agregarTipoNovedad", agregarTipoNovedadController);
  router.post("/agregarTipoCarro", agregarTipoCarroController);
  router.post("/agregarSede", agregarSedeController);
  router.post("/agregarNovedad", agregarNovedadController);
  router.post("/agregarHistorial", agregarHistorialNovedadesController);
  router.post("/agregarReporte", agregarReporteAlquilerController);
  router.post("/agregarFactura", agregarFacturaController);
  return router;
};

export { postInitRoute };
