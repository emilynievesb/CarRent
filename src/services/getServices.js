import { Carro } from "../entities/carro.js";
import { ReporteAlquiler } from "../entities/reportealquiler.js";

const getPrecioHoraById = async (id) => {
  const carro = new Carro();
  carro.idCarro = id;
  return carro.getPrecioHoraById();
};

const datosParaFacturaAlquilerById = async (id) => {
  const reporte = new ReporteAlquiler();
  reporte.id_reporte_alquiler = id;
  const result = await reporte.datosParaFacturaAlquilerById();
  return result;
};

const obtenerTodosLosCarros = async () => {
  const carro = new Carro();
  try {
    const carros = await carro.obtenerTodosLosCarros();
    return carros;
  } catch (error) {
    throw error;
  }
};

export {
  getPrecioHoraById,
  datosParaFacturaAlquilerById,
  obtenerTodosLosCarros,
};
