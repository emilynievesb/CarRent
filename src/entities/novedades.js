import executeQuery from "../utils/db.js";

class Novedades {
  id_tipo_novedad;
  descripcion_novedad;
  id_historial;

  constructor() {}

  async agregarNovedades() {
    let sql = /*sql*/ `INSERT INTO novedades (id_tipo_novedad, descripcion_novedad, id_historial)
    VALUES (${this.id_tipo_novedad}, \"${this.descripcion_novedad}\", ${this.id_historial});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Novedades };
