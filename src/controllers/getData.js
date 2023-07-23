import { obtenerTodosLosCarros } from "../services/getServices.js";

const obtenerTodosLosCarrosController = async (req, res, next) => {
  try {
    const carros = await obtenerTodosLosCarros();
    res.status(200).json(carros);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { obtenerTodosLosCarrosController };
