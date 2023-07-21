import { Router } from "express";
import {
  agregarCarroController,
  agregarNacionalidadController,
  agregarRolController,
  agregarTipoDocumentoController,
  agregarUsuarioController,
  agregarEstadoVigenciaController,
  agregarSoatController,
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
  return router;
};

export { postInitRoute };
