import executeQuery from "../utils/db.js";

class TipoNovedad {
  nombre_tipo_novedad;
  precio_tipo_novedad;

  constructor() {}

  async agregarTipoNovedad() {
    let sql = /*sql*/ `INSERT INTO tipo_novedad (nombre_tipo_novedad, precio_tipo_novedad)
    VALUES (\"${this.nombre_tipo_novedad}\", ${this.precio_tipo_novedad});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodosLosTiposNovedad() {
    let sql = /*sql*/ `SELECT tn.id_tipo_novedad AS id, tn.nombre_tipo_novedad AS nombre,
    tn.precio_tipo_novedad AS precio FROM tipo_novedad AS tn;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { TipoNovedad };
