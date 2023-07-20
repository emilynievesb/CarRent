import { Router } from "express";
import {
  agregarCarroController,
  agregarRolController,
  agregarTipoDocumentoController,
} from "../controllers/postData.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarCarro", agregarCarroController);
  router.post("/agregarRol", agregarRolController);
  router.post("/agregarTipoDocumento", agregarTipoDocumentoController);
  return router;
};

export { postInitRoute };
