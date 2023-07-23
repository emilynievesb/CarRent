// sede.js
import executeQuery from "../utils/db.js";

class Sede {
  ciudad_sede;
  telefono_sede;
  direccion_sede;

  constructor() {}

  async agregarSede() {
    let sql = /*sql*/ `INSERT INTO sedes (ciudad_sede, telefono_sede, direccion_sede)
    VALUES (\"${this.ciudad_sede}\", ${this.telefono_sede}, \"${this.direccion_sede}\");`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerTodasLasSedes() {
    let sql = /*sql*/ `SELECT id_sede AS id, ciudad_sede AS ciudad, telefono_sede AS telefono, direccion_sede AS direccion FROM sedes;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Sede };
