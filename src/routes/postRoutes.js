import { Router } from "express";
import { agregarCarroController } from "../controllers/postData.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarCarro", agregarCarroController);
  return router;
};

export { postInitRoute };
