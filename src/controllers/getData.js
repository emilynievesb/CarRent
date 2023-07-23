import {
  obtenerCarroPorId,
  obtenerFacturaPorId,
  obtenerNovedadPorId,
  obtenerTodasLasFacturas,
  obtenerTodasLasNacionalidades,
  obtenerTodasLasNovedades,
  obtenerTodosLosCarros,
  obtenerTodosLosEstadosVigencia,
  obtenerTodosLosHistoriales,
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
};
