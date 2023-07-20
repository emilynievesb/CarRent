import { Router } from "express";
import {
  agregarCarroController,
  agregarRolController,
} from "../controllers/postData.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarCarro", agregarCarroController);
  router.post("/agregarRol", agregarRolController);
  return router;
};

export { postInitRoute };
