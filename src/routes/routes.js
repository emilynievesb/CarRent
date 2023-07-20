import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/post", postInitRoute());
  return router;
};

export { initAPIRoutes };
