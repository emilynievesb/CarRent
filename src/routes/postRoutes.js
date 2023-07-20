import { Router } from "express";
import {
  agregarCarroController,
  agregarNacionalidadController,
  agregarRolController,
  agregarTipoDocumentoController,
  agregarUsuarioController,
  agregarEstadoVigenciaController,
} from "../controllers/postData.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarCarro", agregarCarroController);
  router.post("/agregarRol", agregarRolController);
  router.post("/agregarTipoDocumento", agregarTipoDocumentoController);
  router.post("/agregarNacionalidad", agregarNacionalidadController);
  router.post("/agregarUsuario", agregarUsuarioController);
  router.post("/agregarEstadoVigencia", agregarEstadoVigenciaController);
  return router;
};

export { postInitRoute };
