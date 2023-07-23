import executeQuery from "../utils/db.js";

class Novedades {
  id_novedad;
  id_tipo_novedad;
  descripcion_novedad;
  id_historial;

  constructor() {}

  async getNovedad() {
    let sql = /*sql*/ `SELECT n.*, t.precio_tipo_novedad
    FROM novedades n
    INNER JOIN tipo_novedad t ON n.id_tipo_novedad = t.id_tipo_novedad
    WHERE id_novedad = ${this.id_novedad}`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async agregarNovedades() {
    let sql = /*sql*/ `INSERT INTO novedades (id_tipo_novedad, descripcion_novedad, id_historial)
    VALUES (${this.id_tipo_novedad}, \"${this.descripcion_novedad}\", ${this.id_historial});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerTodasLasNovedades() {
    let sql = /*sql*/ `SELECT n.id_novedad AS id,
       t.nombre_tipo_novedad AS tipo,
       n.descripcion_novedad AS descripcion,
       t.precio_tipo_novedad AS precio
    FROM novedades n
    INNER JOIN tipo_novedad t ON n.id_tipo_novedad = t.id_tipo_novedad;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async obtenerNovedadPorId() {
    let sql = /*sql*/ `SELECT n.id_novedad AS id,
       t.nombre_tipo_novedad AS tipo,
       n.descripcion_novedad AS descripcion,
       t.precio_tipo_novedad AS precio
    FROM novedades n
    INNER JOIN tipo_novedad t ON n.id_tipo_novedad = t.id_tipo_novedad
    WHERE n.id_novedad = ${this.id_novedad};`;
    try {
      const result = await executeQuery(sql);
      if (result.data.length === 0) {
        throw new Error("No se encontró la novedad con el ID especificado.");
      }
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}

export { Novedades };
