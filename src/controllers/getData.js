import {
  obtenerCarroPorId,
  obtenerTodosLosCarros,
  obtenerTodosLosEstadosVigencia,
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

export {
  obtenerTodosLosCarrosController,
  obtenerCarroPorIdController,
  obtenerTodosLosEstadosVigenciaController,
};
