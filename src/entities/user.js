import executeQuery from "../utils/db.js";

class User {
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
}

export { User };
