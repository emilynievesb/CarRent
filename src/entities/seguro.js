import executeQuery from "../utils/db.js";

class Seguro {
  fecha_inicio_seguro;
  fecha_vencimiento_seguro;
  id_estado;
  constructor() {}
  async agregarSeguro() {
    let sql = /*sql*/ `INSERT INTO seguro (fecha_inicio_seguro, fecha_vencimiento_seguro, id_estado)
    VALUES (\"${this.fecha_inicio_seguro}\", \"${this.fecha_vencimiento_seguro}\", ${this.id_estado});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerTodosLosSeguros() {
    let sql = /*sql*/ `SELECT s.id_seguro AS id, s.fecha_inicio_seguro AS fecha_inicio,
    s.fecha_vencimiento_seguro AS fecha_vencimiento,
    ev.nombre_estado AS estado
FROM seguro AS s
INNER JOIN estado_vigencia AS ev ON s.id_estado = ev.id_estado;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Seguro };
