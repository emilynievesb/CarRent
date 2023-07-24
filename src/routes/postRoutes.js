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
  loginUsuarioController,
} from "../controllers/postData.js";
import {
  agregarCarroDTO,
  agregarEstadoVigenciaDTO,
  agregarFacturaDTO,
  agregarNacionalidadDTO,
  agregarNovedadDTO,
  agregarReporteDTO,
  agregarRolDTO,
  agregarSedeDTO,
  agregarSeguroDTO,
  agregarSoatDTO,
  agregarTecnicomecDTO,
  agregarTipoCarroDTO,
  agregarTipoDocumentoDTO,
  agregarTipoNovedadDTO,
  agregarUsuarioDTO,
} from "./DTO/postDTO.js";
import { middlewareValidLog } from "../utils/auth.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/login", loginUsuarioController);
  router.post(
    "/agregarCarro",
    middlewareValidLog,
    agregarCarroDTO,
    agregarCarroController
  );
  router.post(
    "/agregarRol",
    middlewareValidLog,
    agregarRolDTO,
    agregarRolController
  );
  router.post(
    "/agregarTipoDocumento",
    middlewareValidLog,
    agregarTipoDocumentoDTO,
    agregarTipoDocumentoController
  );
  router.post(
    "/agregarNacionalidad",
    middlewareValidLog,
    agregarNacionalidadDTO,
    agregarNacionalidadController
  );
  router.post("/agregarUsuario", agregarUsuarioDTO, agregarUsuarioController);
  router.post(
    "/agregarEstadoVigencia",
    middlewareValidLog,
    agregarEstadoVigenciaDTO,
    agregarEstadoVigenciaController
  );
  router.post(
    "/agregarSoat",
    middlewareValidLog,
    agregarSoatDTO,
    agregarSoatController
  );
  router.post(
    "/agregarSeguro",
    middlewareValidLog,
    agregarSeguroDTO,
    agregarSeguroController
  );
  router.post(
    "/agregarTecnicomec",
    middlewareValidLog,
    agregarTecnicomecDTO,
    agregarTecnicomecController
  );
  router.post(
    "/agregarTipoNovedad",
    middlewareValidLog,
    agregarTipoNovedadDTO,
    agregarTipoNovedadController
  );
  router.post(
    "/agregarTipoCarro",
    middlewareValidLog,
    agregarTipoCarroDTO,
    agregarTipoCarroController
  );
  router.post(
    "/agregarSede",
    middlewareValidLog,
    agregarSedeDTO,
    agregarSedeController
  );
  router.post("/agregarNovedad", agregarNovedadDTO, agregarNovedadController);
  router.post(
    "/agregarReporte",
    agregarReporteDTO,
    agregarReporteAlquilerController
  );
  router.post(
    "/agregarFactura",
    middlewareValidLog,
    agregarFacturaDTO,
    agregarFacturaController
  );
  return router;
};

export { postInitRoute };
