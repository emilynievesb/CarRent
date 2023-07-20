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
}

export { TipoDocumento };
