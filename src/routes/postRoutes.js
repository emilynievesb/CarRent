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
  loginUsuarioDTO,
} from "./DTO/postDTO.js";
import {
  middlewareValidLogAdmin,
  middlewareValidLogClient,
} from "../utils/auth.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/login", loginUsuarioDTO, loginUsuarioController);
  router.post(
    "/agregarCarro",
    middlewareValidLogAdmin,
    agregarCarroDTO,
    agregarCarroController
  );
  router.post(
    "/agregarRol",
    middlewareValidLogAdmin,
    agregarRolDTO,
    agregarRolController
  );
  router.post(
    "/agregarTipoDocumento",
    middlewareValidLogAdmin,
    agregarTipoDocumentoDTO,
    agregarTipoDocumentoController
  );
  router.post(
    "/agregarNacionalidad",
    middlewareValidLogAdmin,
    agregarNacionalidadDTO,
    agregarNacionalidadController
  );
  router.post("/agregarUsuario", agregarUsuarioDTO, agregarUsuarioController);
  router.post(
    "/agregarEstadoVigencia",
    middlewareValidLogAdmin,
    agregarEstadoVigenciaDTO,
    agregarEstadoVigenciaController
  );
  router.post(
    "/agregarSoat",
    middlewareValidLogAdmin,
    agregarSoatDTO,
    agregarSoatController
  );
  router.post(
    "/agregarSeguro",
    middlewareValidLogAdmin,
    agregarSeguroDTO,
    agregarSeguroController
  );
  router.post(
    "/agregarTecnicomec",
    middlewareValidLogAdmin,
    agregarTecnicomecDTO,
    agregarTecnicomecController
  );
  router.post(
    "/agregarTipoNovedad",
    middlewareValidLogAdmin,
    agregarTipoNovedadDTO,
    agregarTipoNovedadController
  );
  router.post(
    "/agregarTipoCarro",
    middlewareValidLogAdmin,
    agregarTipoCarroDTO,
    agregarTipoCarroController
  );
  router.post(
    "/agregarSede",
    middlewareValidLogAdmin,
    agregarSedeDTO,
    agregarSedeController
  );
  router.post(
    "/agregarNovedad",
    middlewareValidLogClient,
    agregarNovedadDTO,
    agregarNovedadController
  );
  router.post(
    "/agregarReporte",
    middlewareValidLogClient,
    agregarReporteDTO,
    agregarReporteAlquilerController
  );
  router.post(
    "/agregarFactura",
    middlewareValidLogAdmin,
    agregarFacturaDTO,
    agregarFacturaController
  );
  return router;
};

export { postInitRoute };
