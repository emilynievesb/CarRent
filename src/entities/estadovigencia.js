import executeQuery from "../utils/db.js";

class EstadoVigencia {
  nombre_estado;

  constructor() {}

  async agregarEstadoVigencia() {
    let sql = /*sql*/ `INSERT INTO estado_vigencia (nombre_estado)
    VALUES (\"${this.nombre_estado}\");`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { EstadoVigencia };
