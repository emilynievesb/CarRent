import { Carro } from "../entities/carro.js";
import { EstadoVigencia } from "../entities/estadovigencia.js";
import { Factura } from "../entities/factura.js";
import { HistorialNovedades } from "../entities/historialnovedades.js";
import { Nacionalidad } from "../entities/nacionalidad.js";
import { Novedades } from "../entities/novedades.js";
import { ReporteAlquiler } from "../entities/reportealquiler.js";
import { Rol } from "../entities/rol.js";
import { Sede } from "../entities/sede.js";

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

const obtenerTodasLasNacionalidades = async () => {
  const nacionalidad = new Nacionalidad();
  try {
    const result = await nacionalidad.obtenerTodasLasNacionalidades();
    return result;
  } catch (error) {
    throw error;
  }
};

const obtenerTodasLasNovedades = async () => {
  const novedades = new Novedades();
  try {
    const result = await novedades.obtenerTodasLasNovedades();
    return result;
  } catch (error) {
    throw error;
  }
};

const obtenerNovedadPorId = async (idNovedad) => {
  const novedades = new Novedades();
  novedades.id_novedad = idNovedad;
  try {
    const novedad = await novedades.obtenerNovedadPorId();
    return novedad;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosReportes = async () => {
  const reportes = new ReporteAlquiler();
  try {
    const result = await reportes.obtenerTodosLosReportes();
    return result;
  } catch (error) {
    throw error;
  }
};

const obtenerReportePorId = async (idReporte) => {
  const reportes = new ReporteAlquiler();
  reportes.id_reporte_alquiler = idReporte;
  try {
    const result = await reportes.obtenerReportePorId();
    return result;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosRoles = async () => {
  const roles = new Rol();
  try {
    const rolesList = await roles.obtenerTodosLosRoles();
    return rolesList;
  } catch (error) {
    throw error;
  }
};

const obtenerTodasLasSedes = async () => {
  const sedes = new Sede();
  try {
    const sedesList = await sedes.obtenerTodasLasSedes();
    return sedesList;
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
  obtenerTodasLasNovedades,
  obtenerTodasLasNacionalidades,
  obtenerNovedadPorId,
  obtenerTodosLosReportes,
  obtenerReportePorId,
  obtenerTodosLosRoles,
  obtenerTodasLasSedes,
};
