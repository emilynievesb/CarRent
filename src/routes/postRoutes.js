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
  return router;
};

export { postInitRoute };
