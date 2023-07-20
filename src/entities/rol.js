import executeQuery from "../utils/db.js";

class Rol {
  nombre_rol;
  constructor() {}
  async agregarRol() {
    let sql = /*sql*/ `INSERT INTO roles (nombre_rol) VALUES (\"${this.nombre_rol}\");`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Rol };
