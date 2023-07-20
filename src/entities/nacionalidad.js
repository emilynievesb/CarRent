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
}

export { Nacionalidad };
