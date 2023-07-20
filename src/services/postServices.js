import { Carro } from "../entities/carro.js";
import { Rol } from "../entities/rol.js";
import { TipoDocumento } from "../entities/tipodocumento.js";

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

export { agregarCarro, agregarRol, agregarTipoDocumento };
