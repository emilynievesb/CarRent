import { Carro } from "../entities/carro.js";
import { EstadoVigencia } from "../entities/estadovigencia.js";
import { Factura } from "../entities/factura.js";
import { HistorialNovedades } from "../entities/historialnovedades.js";
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

const obtenerTodasLasFacturas = async () => {
  const factura = new Factura();
  try {
    const result = await factura.obtenerTodasLasFacturas();
    return result;
  } catch (error) {
    throw error;
  }
};

const obtenerFacturaPorId = async (idFactura) => {
  const factura = new Factura();
  factura.idFactura = idFactura;
  try {
    const facturaPorId = await factura.obtenerFacturaPorId();
    return facturaPorId;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosHistoriales = async () => {
  const historialNovedades = new HistorialNovedades();
  try {
    const result = await historialNovedades.obtenerTodosLosHistoriales();
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
  obtenerTodasLasFacturas,
  obtenerFacturaPorId,
  obtenerTodosLosHistoriales,
};
