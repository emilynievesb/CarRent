import executeQuery from "../utils/db.js";

class HistorialNovedades {
  acumulado_daños;

  constructor() {}

  async agregarHistorialNovedades() {
    let sql = /*sql*/ `INSERT INTO historial_novedades (acumulado_daños)
    VALUES (${this.acumulado_daños});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { HistorialNovedades };
