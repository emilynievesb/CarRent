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
}

export { TipoNovedad };
