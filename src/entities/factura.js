import executeQuery from "../utils/db.js";

class Factura {
  id_reporte_alquiler;
  fecha_final_inicial;
  fecha_final_real;
  dias_extra;
  total_pago_novedades;
  monto_fianza;
  precio_cotizado;
  total_pago_alquiler;

  constructor() {}

  async validacionFacturacionRepetida() {
    let sql = /*sql*/ `SELECT COUNT(*) AS count FROM factura
    WHERE id_reporte_alquiler = ${this.id_reporte_alquiler}`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  diasExtra() {
    const diasMs = 24 * 60 * 60 * 1000;
    const fechaInicioObj = new Date(this.fecha_final_inicial);
    const fechaFinalObj = new Date(this.fecha_final_real);

    // Calcular la diferencia en días
    const diferenciaMilisegundos = fechaFinalObj - fechaInicioObj;
    const diferenciaDias = Math.abs(diferenciaMilisegundos / diasMs);
    return diferenciaDias;
  }

  precioTotalFactura() {
    return (
      this.precio_cotizado +
      this.dias_extra * 20000 +
      this.total_pago_novedades -
      this.monto_fianza
    );
  }

  async agregarFactura() {
    let sql = /*sql*/ `INSERT INTO factura (id_reporte_alquiler, fecha_final_real, dias_extra, total_pago_alquiler)
    VALUES (${this.id_reporte_alquiler}, \"${this.fecha_final_real}\", ${this.dias_extra}, ${this.total_pago_alquiler});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Factura };
