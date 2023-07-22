import executeQuery from "../utils/db.js";

class Factura {
  id_reporte_alquiler;
  fecha_final_real;
  dias_extra;
  total_pago_alquiler;

  constructor() {}

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
