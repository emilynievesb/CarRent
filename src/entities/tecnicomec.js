import executeQuery from "../utils/db.js";

class Tecnicomec {
  fecha_inicio_tecnicomec;
  fecha_vencimiento_tecnicomec;
  id_estado;

  constructor() {}

  async agregarTecnicomec() {
    let sql = /*sql*/ `INSERT INTO tecnicomec (fecha_inicio_tecnicomec, fecha_vencimiento_tecnicomec, id_estado)
    VALUES (\"${this.fecha_inicio_tecnicomec}\", \"${this.fecha_vencimiento_tecnicomec}\", ${this.id_estado});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerTodosLosTecnicomec() {
    let sql = /*sql*/ `SELECT tm.id_tecnicomec AS id, tm.fecha_inicio_tecnicomec AS fecha_inicio, 
    tm.fecha_vencimiento_tecnicomec AS fecha_vencimiento,
    ev.nombre_estado AS estado
    FROM tecnicomec AS tm
    INNER JOIN estado_vigencia AS ev ON tm.id_estado = ev.id_estado;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Tecnicomec };
