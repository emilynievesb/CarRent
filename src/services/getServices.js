import { Carro } from "../entities/carro.js";
import { EstadoVigencia } from "../entities/estadovigencia.js";
import { Factura } from "../entities/factura.js";
import { HistorialNovedades } from "../entities/historialnovedades.js";
import { Nacionalidad } from "../entities/nacionalidad.js";
import { Novedades } from "../entities/novedades.js";
import { ReporteAlquiler } from "../entities/reportealquiler.js";
import { Rol } from "../entities/rol.js";
import { Sede } from "../entities/sede.js";
import { Seguro } from "../entities/seguro.js";
import { Soat } from "../entities/soat.js";
import { Tecnicomec } from "../entities/tecnicomec.js";
import { TipoCarro } from "../entities/tipocarro.js";
import { TipoDocumento } from "../entities/tipodocumento.js";
import { TipoNovedad } from "../entities/tiponovedad.js";
import { User } from "../entities/user.js";
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
const obtenerTodosLosSeguros = async () => {
  const seguros = new Seguro();
  try {
    const segurosList = await seguros.obtenerTodosLosSeguros();
    return segurosList;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosSoat = async () => {
  const soat = new Soat();
  try {
    const soatList = await soat.obtenerTodosLosSoat();
    return soatList;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosTecnicomec = async () => {
  const tecnicomec = new Tecnicomec();
  try {
    const tecnicomecList = await tecnicomec.obtenerTodosLosTecnicomec();
    return tecnicomecList;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosTiposCarro = async () => {
  const tipoCarro = new TipoCarro();
  try {
    const tipoCarroList = await tipoCarro.obtenerTodosLosTiposCarro();
    return tipoCarroList;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosTiposDocumento = async () => {
  const tipoDocumento = new TipoDocumento();
  try {
    const tipoDocumentoList =
      await tipoDocumento.obtenerTodosLosTiposDocumento();
    return tipoDocumentoList;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosTiposNovedad = async () => {
  const tipoNovedad = new TipoNovedad();
  try {
    const tipoNovedadList = await tipoNovedad.obtenerTodosLosTiposNovedad();
    return tipoNovedadList;
  } catch (error) {
    throw error;
  }
};

const obtenerTodosLosUsuarios = async () => {
  const user = new User();
  try {
    const userList = await user.obtenerTodosLosUsuarios();
    return userList;
  } catch (error) {
    throw error;
  }
};

const obtenerUsuarioPorId = async (idUsuario) => {
  const user = new User();
  user.id_user = idUsuario;
  try {
    const userData = await user.obtenerUsuarioPorId();
    return userData;
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
  obtenerTodosLosSeguros,
  obtenerTodosLosSoat,
  obtenerTodosLosTecnicomec,
  obtenerTodosLosTiposCarro,
  obtenerTodosLosTiposDocumento,
  obtenerTodosLosTiposNovedad,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
};
