import executeQuery from "../utils/db.js";

class ReporteAlquiler {
  id_reporte_alquiler;
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

  async datosParaFacturaAlquilerById() {
    let sql = /*sql*/ `SELECT r.fecha_final_alquiler AS fecha_final_inicial,
    r.precio_cotizado_alquiler,
    r.monto_fianza,
    h.acumulado_daños
    FROM reporte_alquiler r
    INNER JOIN historial_novedades h ON r.id_historial_novedades = h.id_historial
    WHERE id_reporte_alquiler = ${this.id_reporte_alquiler}`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
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
  async obtenerTodosLosReportes() {
    let sql = /*sql*/ `SELECT ra.id_reporte_alquiler AS id,
       u.nombre_user AS nombre_usuario,
       c.placa_carro AS placa_carro,
       ra.fecha_inicio_alquiler AS fecha_inicio,
       ra.fecha_final_alquiler AS fecha_final,
       ra.precio_cotizado_alquiler AS precio_cotizado,
       ra.monto_fianza AS monto_fianza
    FROM reporte_alquiler ra
    INNER JOIN users u ON ra.id_user = u.id_user
    INNER JOIN carros c ON ra.id_carro = c.id_carro;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerReportePorId() {
    let sql = /*sql*/ `SELECT ra.id_reporte_alquiler AS id,
       u.nombre_user AS nombre_usuario,
       c.placa_carro AS placa_carro,
       ra.fecha_inicio_alquiler AS fecha_inicio,
       ra.fecha_final_alquiler AS fecha_final,
       ra.precio_cotizado_alquiler AS precio_cotizado,
       ra.monto_fianza AS monto_fianza
    FROM reporte_alquiler ra
    INNER JOIN users u ON ra.id_user = u.id_user
    INNER JOIN carros c ON ra.id_carro = c.id_carro
    WHERE ra.id_reporte_alquiler = ${this.id_reporte_alquiler};`;
    try {
      const result = await executeQuery(sql);
      if (result.data.length === 0) {
        throw new Error(
          "No se encontró el reporte de alquiler con el ID especificado."
        );
      }
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}

export { ReporteAlquiler };
