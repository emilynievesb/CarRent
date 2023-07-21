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
}

export { TipoCarro };
