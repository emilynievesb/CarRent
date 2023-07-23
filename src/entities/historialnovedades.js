import executeQuery from "../utils/db.js";

class HistorialNovedades {
  id_historial_novedades;
  acumulado_daños;

  constructor() {}

  async actualizacionHistorial() {
    let sql = /*sql*/ `UPDATE historial_novedades
    SET acumulado_daños = acumulado_daños + ${this.acumulado_daños}
    WHERE id_historial = ${this.id_historial_novedades};
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

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
