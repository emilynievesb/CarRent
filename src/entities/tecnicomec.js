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
}

export { Tecnicomec };
