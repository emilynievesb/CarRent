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
}

export { Soat };
