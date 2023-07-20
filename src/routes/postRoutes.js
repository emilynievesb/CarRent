import { Router } from "express";
import {
  agregarCarroController,
  agregarNacionalidadController,
  agregarRolController,
  agregarTipoDocumentoController,
} from "../controllers/postData.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarCarro", agregarCarroController);
  router.post("/agregarRol", agregarRolController);
  router.post("/agregarTipoDocumento", agregarTipoDocumentoController);
  router.post("/agregarNacionalidad", agregarNacionalidadController);
  return router;
};

export { postInitRoute };
