import executeQuery from "../utils/db.js";

class TipoCarro {
  nombre_tipo_carro;

  constructor() {}

  async agregarTipoCarro() {
    let sql = /*sql*/ `INSERT INTO tipo_carro (nombre_tipo_carro) VALUES (\"${this.nombre_tipo_carro}\");`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerTodosLosTiposCarro() {
    let sql = /*sql*/ `SELECT tc.id_tipo_carro AS id, tc.nombre_tipo_carro AS nombre 
    FROM tipo_carro AS tc;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { TipoCarro };
