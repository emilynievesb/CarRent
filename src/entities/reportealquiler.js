import executeQuery from "../utils/db.js";

class ReporteAlquiler {
  id_user;
  id_carro;
  fecha_inicio_alquiler;
  fecha_final_alquiler;
  precio_cotizado_alquiler;
  monto_fianza;
  horas_alquiler;
  precio_hora_carro;
  id_historial_novedades;

  constructor() {}

  calcularHoras() {
    const fechaInicioMs = new Date(this.fecha_inicio_alquiler).getTime();
    const fechaFinalMs = new Date(this.fecha_final_alquiler).getTime();
    const diferenciaMs = fechaFinalMs - fechaInicioMs;
    const horas = diferenciaMs / (1000 * 60 * 60);
    return horas;
  }

  calcularCotizacion() {
    return this.horas_alquiler * this.precio_hora_carro;
  }

  calcularFianza() {
    return this.precio_cotizado_alquiler * 0.2;
  }

  async disponibilidadCarroById() {
    let sql = /*sql*/ `SELECT COUNT(*) AS count FROM reporte_alquiler WHERE id_carro = ${this.id_carro}
    AND fecha_final_alquiler >= \"${this.fecha_inicio_alquiler}\" AND fecha_inicio_alquiler <= \"${this.fecha_final_alquiler}\";`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

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
