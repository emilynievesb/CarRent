import executeQuery from "../utils/db.js";

class Nacionalidad {
  nombre_nacionalidad;
  constructor() {}
  async agregarNacionalidad() {
    let sql = /*sql*/ `INSERT INTO nacionalidades (nombre_nacionalidad)
    VALUES (\"${this.nombre_nacionalidad}\");`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerTodasLasNacionalidades() {
    let sql = /*sql*/ `SELECT id_nacionalidad AS id, nombre_nacionalidad AS nombre FROM nacionalidades;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Nacionalidad };
