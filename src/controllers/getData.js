import {
  obtenerCarroPorId,
  obtenerFacturaPorId,
  obtenerNovedadPorId,
  obtenerReportePorId,
  obtenerTodasLasFacturas,
  obtenerTodasLasNacionalidades,
  obtenerTodasLasNovedades,
  obtenerTodasLasSedes,
  obtenerTodosLosCarros,
  obtenerTodosLosEstadosVigencia,
  obtenerTodosLosHistoriales,
  obtenerTodosLosReportes,
  obtenerTodosLosRoles,
  obtenerTodosLosSeguros,
  obtenerTodosLosSoat,
  obtenerTodosLosTecnicomec,
  obtenerTodosLosTiposCarro,
  obtenerTodosLosTiposDocumento,
  obtenerTodosLosTiposNovedad,
  obtenerTodosLosUsuarios,
} from "../services/getServices.js";

const obtenerTodosLosCarrosController = async (req, res, next) => {
  try {
    const carros = await obtenerTodosLosCarros();
    res.status(200).json(carros);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerCarroPorIdController = async (req, res, next) => {
  try {
    const { idCarro } = req.query;
    const result = await obtenerCarroPorId(idCarro);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosEstadosVigenciaController = async (req, res, next) => {
  try {
    const estadosVigencia = await obtenerTodosLosEstadosVigencia();
    res.status(200).json(estadosVigencia);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodasLasFacturasController = async (req, res, next) => {
  try {
    const result = await obtenerTodasLasFacturas();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerFacturaPorIdController = async (req, res, next) => {
  try {
    const { idFactura } = req.query;
    const result = await obtenerFacturaPorId(idFactura);
    res.status(200).json(result);
  } catch (error) {
    if (error.message === "No se encontró la factura con el ID especificado.") {
      res.status(404).json(error.message);
    } else {
      res.status(500).json(error);
    }
  }
};

const obtenerTodosLosHistorialesController = async (req, res, next) => {
  try {
    const result = await obtenerTodosLosHistoriales();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodasLasNacionalidadesController = async (req, res, next) => {
  try {
    const result = await obtenerTodasLasNacionalidades();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodasLasNovedadesController = async (req, res, next) => {
  try {
    const result = await obtenerTodasLasNovedades();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerNovedadPorIdController = async (req, res, next) => {
  const { idNovedad } = req.query;
  try {
    const result = await obtenerNovedadPorId(idNovedad);
    res.status(200).json(result);
  } catch (error) {
    if (error.message === "No se encontró la novedad con el ID especificado.") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor." });
    }
  }
};

const obtenerTodosLosReportesController = async (req, res, next) => {
  try {
    const reportes = await obtenerTodosLosReportes();
    res.status(200).json(reportes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerReportePorIdController = async (req, res, next) => {
  const { idReporte } = req.query;
  try {
    const reporte = await obtenerReportePorId(idReporte);
    res.status(200).json(reporte);
  } catch (error) {
    if (
      error.message ===
      "No se encontró el reporte de alquiler con el ID especificado."
    ) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor." });
    }
  }
};

const obtenerTodosLosRolesController = async (req, res, next) => {
  try {
    const roles = await obtenerTodosLosRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodasLasSedesController = async (req, res, next) => {
  try {
    const sedes = await obtenerTodasLasSedes();
    res.status(200).json(sedes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosSegurosController = async (req, res, next) => {
  try {
    const seguros = await obtenerTodosLosSeguros();
    res.status(200).json(seguros);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosSoatController = async (req, res, next) => {
  try {
    const soatList = await obtenerTodosLosSoat();
    res.status(200).json(soatList);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosTecnicomecController = async (req, res, next) => {
  try {
    const tecnicomecList = await obtenerTodosLosTecnicomec();
    res.status(200).json(tecnicomecList);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosTiposCarroController = async (req, res, next) => {
  try {
    const tipoCarroList = await obtenerTodosLosTiposCarro();
    res.status(200).json(tipoCarroList);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosTiposDocumentoController = async (req, res, next) => {
  try {
    const tipoDocumentoList = await obtenerTodosLosTiposDocumento();
    res.status(200).json(tipoDocumentoList);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosTiposNovedadController = async (req, res, next) => {
  try {
    const tipoNovedadList = await obtenerTodosLosTiposNovedad();
    res.status(200).json(tipoNovedadList);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerTodosLosUsuariosController = async (req, res, next) => {
  try {
    const userList = await obtenerTodosLosUsuarios();
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  obtenerTodosLosCarrosController,
  obtenerCarroPorIdController,
  obtenerTodosLosEstadosVigenciaController,
  obtenerTodasLasFacturasController,
  obtenerFacturaPorIdController,
  obtenerTodosLosHistorialesController,
  obtenerTodasLasNacionalidadesController,
  obtenerTodasLasNovedadesController,
  obtenerNovedadPorIdController,
  obtenerTodosLosReportesController,
  obtenerReportePorIdController,
  obtenerTodosLosRolesController,
  obtenerTodasLasSedesController,
  obtenerTodosLosSegurosController,
  obtenerTodosLosSoatController,
  obtenerTodosLosTecnicomecController,
  obtenerTodosLosTiposCarroController,
  obtenerTodosLosTiposDocumentoController,
  obtenerTodosLosUsuariosController,
  obtenerTodosLosTiposNovedadController,
};
