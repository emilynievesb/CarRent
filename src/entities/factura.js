import executeQuery from "../utils/db.js";

class Factura {
  idFactura;
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

  async obtenerTodasLasFacturas() {
    let sql = /*sql*/ `SELECT f.id_factura AS id,
       f.fecha_final_real AS fecha_final,
       f.dias_extra AS dias_extra,
       f.total_pago_alquiler AS total_pago,
       ra.fecha_inicio_alquiler AS fecha_inicio,
       ra.fecha_final_alquiler AS fecha_final_alquiler,
       ra.precio_cotizado_alquiler AS precio_cotizado,
       ra.monto_fianza AS monto_fianza,
       h.acumulado_daños AS acumulado_danos,
       u.nombre_user AS nombre_cliente,
       c.marca_carro AS marca_carro,
       c.modelo_carro AS modelo_carro,
       s.ciudad_sede AS ciudad_sede
    FROM factura f
    INNER JOIN reporte_alquiler ra ON f.id_reporte_alquiler = ra.id_reporte_alquiler
    INNER JOIN historial_novedades h ON ra.id_historial_novedades = h.id_historial
    INNER JOIN users u ON ra.id_user = u.id_user
    INNER JOIN carros c ON ra.id_carro = c.id_carro
    INNER JOIN sedes s ON c.id_sede = s.id_sede;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async obtenerFacturaPorId() {
    let sql = /*sql*/ `SELECT f.id_factura AS id,
       f.fecha_final_real AS fecha_final,
       f.dias_extra AS dias_extra,
       f.total_pago_alquiler AS total_pago,
       ra.fecha_inicio_alquiler AS fecha_inicio,
       ra.fecha_final_alquiler AS fecha_final_alquiler,
       ra.precio_cotizado_alquiler AS precio_cotizado,
       ra.monto_fianza AS monto_fianza,
       h.acumulado_daños AS acumulado_danos,
       u.nombre_user AS nombre_cliente,
       c.marca_carro AS marca_carro,
       c.modelo_carro AS modelo_carro,
       s.ciudad_sede AS ciudad_sede
    FROM factura f
    INNER JOIN reporte_alquiler ra ON f.id_reporte_alquiler = ra.id_reporte_alquiler
    INNER JOIN historial_novedades h ON ra.id_historial_novedades = h.id_historial
    INNER JOIN users u ON ra.id_user = u.id_user
    INNER JOIN carros c ON ra.id_carro = c.id_carro
    INNER JOIN sedes s ON c.id_sede = s.id_sede
    WHERE f.id_factura = ${this.idFactura};`;
    try {
      const result = await executeQuery(sql);
      if (result.data.length === 0) {
        throw new Error("No se encontró la factura con el ID especificado.");
      }
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}

export { Factura };
