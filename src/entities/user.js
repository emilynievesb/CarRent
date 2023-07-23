import executeQuery from "../utils/db.js";

class User {
  id_user;
  doc_user;
  id_tipo_doc;
  nombre_user;
  correo_user;
  direccion_user;
  telefono_user;
  id_nacionalidad;
  nickname_user;
  contrasena_user;
  id_rol;

  constructor() {}

  async agregarUser() {
    let sql = /*sql*/ `INSERT INTO users (doc_user, id_tipo_doc, nombre_user, correo_user, direccion_user,
    telefono_user, id_nacionalidad, nickname_user, contrasena_user, id_rol)
    VALUES (${this.doc_user}, ${this.id_tipo_doc}, \"${this.nombre_user}\", \"${this.correo_user}\", \"${this.direccion_user}\",
    ${this.telefono_user}, ${this.id_nacionalidad}, \"${this.nickname_user}\", \"${this.contrasena_user}\", ${this.id_rol});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerTodosLosUsuarios() {
    let sql = /*sql*/ `SELECT u.id_user AS id, u.doc_user AS documento,
    td.nombre_tipo_documento AS tipo_documento,
    u.nombre_user AS nombre, u.correo_user AS correo,
    u.direccion_user AS direccion, u.telefono_user AS telefono,
    n.nombre_nacionalidad AS nacionalidad,
    u.nickname_user AS nickname,
    r.nombre_rol AS rol FROM users AS u
    INNER JOIN tipo_documento AS td ON u.id_tipo_doc = td.id_tipo_doc
    INNER JOIN nacionalidades AS n ON u.id_nacionalidad = n.id_nacionalidad
    INNER JOIN roles AS r ON u.id_rol = r.id_rol;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async obtenerUsuarioPorId() {
    let sql = /*sql*/ `SELECT u.id_user AS id, u.doc_user AS documento, 
    td.nombre_tipo_documento AS tipo_documento, 
    u.nombre_user AS nombre, u.correo_user AS correo, 
    u.direccion_user AS direccion, u.telefono_user AS telefono, 
    n.nombre_nacionalidad AS nacionalidad, 
    u.nickname_user AS nickname, 
    r.nombre_rol AS rol FROM users AS u
    INNER JOIN tipo_documento AS td ON u.id_tipo_doc = td.id_tipo_doc
    INNER JOIN nacionalidades AS n ON u.id_nacionalidad = n.id_nacionalidad
    INNER JOIN roles AS r ON u.id_rol = r.id_rol
    WHERE u.id_user = ${this.id_user};`;
    try {
      const result = await executeQuery(sql);
      if (result.data.length === 0) {
        throw new Error("No se encontró el usuario con el ID especificado.");
      }
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}

export { User };
