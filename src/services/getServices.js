import { Carro } from "../entities/carro.js";
import { EstadoVigencia } from "../entities/estadovigencia.js";
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
    const result = await carro.obtenerTodosLosCarros();
    return result;
  } catch (error) {
    throw error;
  }
};

const obtenerCarroPorId = async (idCarro) => {
  const carro = new Carro();
  carro.idCarro = idCarro;
  try {
    const result = await carro.obtenerCarroPorId();
    return result;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosEstadosVigencia = async () => {
  const estadoVigencia = new EstadoVigencia();
  try {
    const result = await estadoVigencia.obtenerTodosLosEstadosVigencia();
    return result;
  } catch (error) {
    throw error;
  }
};

export {
  getPrecioHoraById,
  datosParaFacturaAlquilerById,
  obtenerTodosLosCarros,
  obtenerCarroPorId,
  obtenerTodosLosEstadosVigencia,
};
