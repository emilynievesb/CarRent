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
import {
  datosParaFacturaAlquilerById,
  getPrecioHoraById,
} from "./getServices.js";
import { actualizacionHistorial } from "./putServices.js";

const agregarCarro = async (
  marca_carro,
  modelo_carro,
  numero_puertas_carro,
  color_carro,
  precio_hora_carro,
  placa_carro,
  id_soat,
  id_seguro,
  id_tecnicomec,
  id_tipo_carro,
  id_sede
) => {
  const carro = new Carro();
  carro.marca_carro = marca_carro;
  carro.modelo_carro = modelo_carro;
  carro.numero_puertas_carro = numero_puertas_carro;
  carro.color_carro = color_carro;
  carro.precio_hora_carro = precio_hora_carro;
  carro.placa_carro = placa_carro;
  carro.id_soat = id_soat;
  carro.id_seguro = id_seguro;
  carro.id_tecnicomec = id_tecnicomec;
  carro.id_tipo_carro = id_tipo_carro;
  carro.id_sede = id_sede;
  const query = await carro.agregarCarro();
  if (query.affectedRows === 1) {
    return "Carro agregado con exito";
  }
};

const agregarRol = async (nombre_rol) => {
  const rol = new Rol();
  rol.nombre_rol = nombre_rol;
  const query = await rol.agregarRol();
  if (query.affectedRows === 1) {
    return "Rol agregado correctamente";
  }
};

const agregarTipoDocumento = async (nombre_tipo_documento) => {
  const tipo_documento = new TipoDocumento();
  tipo_documento.nombre_tipo_documento = nombre_tipo_documento;
  const query = await tipo_documento.agregarTipoDocumento();
  if (query.affectedRows === 1) {
    return "Tipo de documento agregado correctamente";
  }
};

const agregarNacionalidad = async (nombre_nacionalidad) => {
  const nacionalidad = new Nacionalidad();
  nacionalidad.nombre_nacionalidad = nombre_nacionalidad;
  const query = await nacionalidad.agregarNacionalidad();
  if (query.affectedRows === 1) {
    return "Nacionalidad agregada correctamente";
  }
};

const agregarUsuario = async (
  doc_user,
  id_tipo_doc,
  nombre_user,
  correo_user,
  direccion_user,
  telefono_user,
  id_nacionalidad,
  nickname_user,
  contrasena_user,
  id_rol
) => {
  const user = new User();
  user.doc_user = doc_user;
  user.id_tipo_doc = id_tipo_doc;
  user.nombre_user = nombre_user;
  user.correo_user = correo_user;
  user.direccion_user = direccion_user;
  user.telefono_user = telefono_user;
  user.id_nacionalidad = id_nacionalidad;
  user.nickname_user = nickname_user;
  user.contrasena_user = contrasena_user;
  user.id_rol = id_rol;
  const query = await user.agregarUser();
  if (query.affectedRows === 1) {
    return "Usuario agregado correctamente";
  }
};

const agregarEstadoVigencia = async (nombre_estado) => {
  const estado = new EstadoVigencia();
  estado.nombre_estado = nombre_estado;
  const query = await estado.agregarEstadoVigencia();
  if (query.affectedRows === 1) {
    return "Estado agregado correctamente";
  }
};

const agregarSoat = async (
  fecha_inicio_soat,
  fecha_vencimiento_soat,
  id_estado
) => {
  const soat = new Soat();
  soat.fecha_inicio_soat = fecha_inicio_soat;
  soat.fecha_vencimiento_soat = fecha_vencimiento_soat;
  soat.id_estado = id_estado;
  const query = await soat.agregarSoat();
  if (query.affectedRows === 1) {
    return "Soat agregado correctamente";
  }
};

const agregarSeguro = async (
  fecha_inicio_seguro,
  fecha_vencimiento_seguro,
  id_estado
) => {
  const seguro = new Seguro();
  seguro.fecha_inicio_seguro = fecha_inicio_seguro;
  seguro.fecha_vencimiento_seguro = fecha_vencimiento_seguro;
  seguro.id_estado = id_estado;
  const query = await seguro.agregarSeguro();
  if (query.affectedRows === 1) {
    return "Seguro creado correctamente";
  }
};

const agregarTecnicomec = async (
  fecha_inicio_tecnicomec,
  fecha_vencimiento_tecnicomec,
  id_estado
) => {
  const tecnicomec = new Tecnicomec();
  tecnicomec.fecha_inicio_tecnicomec = fecha_inicio_tecnicomec;
  tecnicomec.fecha_vencimiento_tecnicomec = fecha_vencimiento_tecnicomec;
  tecnicomec.id_estado = id_estado;
  const query = await tecnicomec.agregarTecnicomec();
  if (query.affectedRows === 1) {
    return "Tecnicomecánica creada correctamente";
  }
};

const agregarTipoNovedad = async (nombre_tipo_novedad, precio_tipo_novedad) => {
  const tipoNovedad = new TipoNovedad();
  tipoNovedad.nombre_tipo_novedad = nombre_tipo_novedad;
  tipoNovedad.precio_tipo_novedad = precio_tipo_novedad;
  const query = await tipoNovedad.agregarTipoNovedad();
  if (query.affectedRows === 1) {
    return "Tipo de novedad creada correctamente";
  }
};

const agregarTipoCarro = async (nombre_tipo_carro) => {
  const tipoCarro = new TipoCarro();
  tipoCarro.nombre_tipo_carro = nombre_tipo_carro;
  const query = await tipoCarro.agregarTipoCarro();
  if (query.affectedRows === 1) {
    return "Tipo de carro creado correctamente";
  }
};

const agregarSede = async (ciudad_sede, telefono_sede, direccion_sede) => {
  const sede = new Sede();
  sede.ciudad_sede = ciudad_sede;
  sede.telefono_sede = telefono_sede;
  sede.direccion_sede = direccion_sede;
  const query = await sede.agregarSede();
  if (query.affectedRows === 1) {
    return "Sede creada correctamente";
  }
};

const agregarNovedad = async (
  id_tipo_novedad,
  descripcion_novedad,
  id_historial
) => {
  const novedad = new Novedades();
  novedad.id_tipo_novedad = id_tipo_novedad;
  novedad.descripcion_novedad = descripcion_novedad;
  novedad.id_historial = id_historial;
  const query = await novedad.agregarNovedades();
  novedad.id_novedad = query.insertId;
  const result = await novedad.getNovedad();
  const { precio_tipo_novedad } = result[0];
  const queryPut = await actualizacionHistorial(
    id_historial,
    precio_tipo_novedad
  );
  if (queryPut.affectedRows !== 1) {
    throw new Error("Falló la actualización de acumulado de daños");
  }
  if (query.affectedRows === 1) {
    return `Novedad creada correctamente, se agregaron $${precio_tipo_novedad.toLocaleString()} al recargo`;
  }
};

const agregarHistorialNovedades = async (acumulado_daños) => {
  const historial = new HistorialNovedades();
  historial.acumulado_daños = acumulado_daños;
  const query = await historial.agregarHistorialNovedades();
  if (query.affectedRows === 1) {
    return query.insertId;
  }
};

const agregarReporteAlquiler = async (
  id_user,
  id_carro,
  fecha_inicio_alquiler,
  fecha_final_alquiler
) => {
  //Creación del historial en $0 necesario para el alquiler
  const id_historial_novedades = await agregarHistorialNovedades(0);
  const reporte = new ReporteAlquiler();
  reporte.id_user = id_user;
  reporte.id_carro = id_carro;
  reporte.fecha_inicio_alquiler = fecha_inicio_alquiler;
  reporte.fecha_final_alquiler = fecha_final_alquiler;
  //Llamado de verificación de disponibilidad
  const disponibilidad = await reporte.disponibilidadCarroById();
  if (disponibilidad[0].count !== 0) {
    throw new Error(
      "El carro no está disponible para esa fecha, por favor seleccione otro"
    );
  }
  reporte.id_historial_novedades = id_historial_novedades;
  //1. Calculo de horas en las que el carro estará alquilado
  reporte.horas_alquiler = reporte.calcularHoras();
  //2. Calculo del precio de las horas
  reporte.precio_hora_carro = await getPrecioHoraById(id_carro);
  //3. Calculo del precio de cotización basado en las horas
  reporte.precio_cotizado_alquiler = reporte.calcularCotizacion();
  //4. Calculo fianza
  reporte.monto_fianza = reporte.calcularFianza();
  const query = await reporte.agregarReporteAlquiler();
  if (query.affectedRows === 1) {
    return `Reporte de alquiler creado correctamente, con historial de novedades ${reporte.id_historial_novedades}, para que pueda reportar cualquier novedad llegado el caso`;
  }
};

const agregarFactura = async (id_reporte_alquiler, fecha_final_real) => {
  const factura = new Factura();
  factura.id_reporte_alquiler = id_reporte_alquiler;
  const validacion = await factura.validacionFacturacionRepetida();
  if (validacion[0].count !== 0) {
    throw new Error("Ya existe una factura para este alquiler");
  }
  factura.fecha_final_real = fecha_final_real;
  //Se traen los datos necesarios para facturar, desde el reporte del alquiler
  const dataReporte = await datosParaFacturaAlquilerById(id_reporte_alquiler);
  const {
    fecha_final_inicial,
    precio_cotizado_alquiler,
    monto_fianza,
    acumulado_daños,
  } = dataReporte[0];
  factura.fecha_final_inicial = fecha_final_inicial;
  factura.dias_extra = factura.diasExtra();
  factura.total_pago_novedades = acumulado_daños;
  factura.monto_fianza = monto_fianza;
  factura.precio_cotizado = precio_cotizado_alquiler;
  factura.total_pago_alquiler = factura.precioTotalFactura();
  const query = await factura.agregarFactura();
  if (query.affectedRows === 1) {
    return `Factura creada correctamente por valor $${Math.trunc(
      factura.total_pago_alquiler
    ).toLocaleString()}`;
  }
};

export {
  agregarCarro,
  agregarRol,
  agregarTipoDocumento,
  agregarNacionalidad,
  agregarUsuario,
  agregarEstadoVigencia,
  agregarSoat,
  agregarSeguro,
  agregarTecnicomec,
  agregarTipoNovedad,
  agregarTipoCarro,
  agregarSede,
  agregarNovedad,
  agregarHistorialNovedades,
  agregarReporteAlquiler,
  agregarFactura,
};
