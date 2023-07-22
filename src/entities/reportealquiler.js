import executeQuery from "../utils/db.js";

class ReporteAlquiler {
  id_user;
  id_carro;
  fecha_inicio_alquiler;
  fecha_final_alquiler;
  precio_cotizado_alquiler;
  monto_fianza;
  id_historial_novedades;

  constructor() {}

  async agregarReporteAlquiler() {
    let sql = /*sql*/ `INSERT INTO reporte_alquiler (id_user, id_carro, fecha_inicio_alquiler, fecha_final_alquiler, precio_cotizado_alquiler, monto_fianza, id_historial_novedades)
    VALUES (${this.id_user}, ${this.id_carro}, \"${this.fecha_inicio_alquiler}\", \"${this.fecha_final_alquiler}\", ${this.precio_cotizado_alquiler}, ${this.monto_fianza}, ${this.id_historial_novedades});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { ReporteAlquiler };
