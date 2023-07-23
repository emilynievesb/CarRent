import executeQuery from "../utils/db.js";

class TipoDocumento {
  nombre_tipo_documento;

  constructor() {}

  async agregarTipoDocumento() {
    let sql = /*sql*/ `INSERT INTO tipo_documento (nombre_tipo_documento)
    VALUES (\"${this.nombre_tipo_documento}\");`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodosLosTiposDocumento() {
    let sql = /*sql*/ `SELECT td.id_tipo_doc AS id, td.nombre_tipo_documento AS nombre
    FROM tipo_documento AS td;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { TipoDocumento };
