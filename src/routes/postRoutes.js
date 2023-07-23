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
  agregarReporteAlquilerController,
  agregarFacturaController,
} from "../controllers/postData.js";
import {
  agregarCarroDTO,
  agregarEstadoVigenciaDTO,
  agregarNacionalidadDTO,
  agregarRolDTO,
  agregarSeguroDTO,
  agregarSoatDTO,
  agregarTecnicomecDTO,
  agregarTipoCarroDTO,
  agregarTipoDocumentoDTO,
  agregarUsuarioDTO,
} from "./DTO/postDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarCarro", agregarCarroDTO, agregarCarroController);
  router.post("/agregarRol", agregarRolDTO, agregarRolController);
  router.post(
    "/agregarTipoDocumento",
    agregarTipoDocumentoDTO,
    agregarTipoDocumentoController
  );
  router.post(
    "/agregarNacionalidad",
    agregarNacionalidadDTO,
    agregarNacionalidadController
  );
  router.post("/agregarUsuario", agregarUsuarioDTO, agregarUsuarioController);
  router.post(
    "/agregarEstadoVigencia",
    agregarEstadoVigenciaDTO,
    agregarEstadoVigenciaController
  );
  router.post("/agregarSoat", agregarSoatDTO, agregarSoatController);
  router.post("/agregarSeguro", agregarSeguroDTO, agregarSeguroController);
  router.post(
    "/agregarTecnicomec",
    agregarTecnicomecDTO,
    agregarTecnicomecController
  );
  router.post("/agregarTipoNovedad", agregarTipoNovedadController);
  router.post(
    "/agregarTipoCarro",
    agregarTipoCarroDTO,
    agregarTipoCarroController
  );
  router.post("/agregarSede", agregarSedeController);
  router.post("/agregarNovedad", agregarNovedadController);
  router.post("/agregarReporte", agregarReporteAlquilerController);
  router.post("/agregarFactura", agregarFacturaController);
  return router;
};

export { postInitRoute };
