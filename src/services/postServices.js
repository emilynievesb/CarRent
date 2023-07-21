import { Carro } from "../entities/carro.js";
import { EstadoVigencia } from "../entities/estadovigencia.js";
import { Nacionalidad } from "../entities/nacionalidad.js";
import { Rol } from "../entities/rol.js";
import { Seguro } from "../entities/seguro.js";
import { Soat } from "../entities/soat.js";
import { Tecnicomec } from "../entities/tecnicomec.js";
import { TipoDocumento } from "../entities/tipodocumento.js";
import { TipoNovedad } from "../entities/tiponovedad.js";
import { User } from "../entities/user.js";

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
};
