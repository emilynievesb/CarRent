import executeQuery from "../utils/db.js";

class Soat {
  fecha_inicio_soat;
  fecha_vencimiento_soat;
  id_estado;

  constructor(fecha_inicio_soat, fecha_vencimiento_soat, id_estado) {
    this.fecha_inicio_soat = fecha_inicio_soat;
    this.fecha_vencimiento_soat = fecha_vencimiento_soat;
    this.id_estado = id_estado;
  }

  async agregarSoat() {
    let sql = /*sql*/ `INSERT INTO soat (fecha_inicio_soat, fecha_vencimiento_soat, id_estado)
    VALUES (\"${this.fecha_inicio_soat}\", \"${this.fecha_vencimiento_soat}\", ${this.id_estado});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodosLosSoat() {
    let sql = /*sql*/ `
    SELECT s.id_soat AS id, s.fecha_inicio_soat AS fecha_inicio,
    s.fecha_vencimiento_soat AS fecha_vencimiento,
    ev.nombre_estado AS estado
    FROM soat AS s
    INNER JOIN estado_vigencia AS ev ON s.id_estado = ev.id_estado;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Soat };
