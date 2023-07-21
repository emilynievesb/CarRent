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
}

export { Seguro };
