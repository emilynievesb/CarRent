import executeQuery from "../utils/db.js";

class Carro {
  marca_carro;
  modelo_carro;
  numero_puertas_carro;
  color_carro;
  precio_hora_carro;
  placa_carro;
  id_soat;
  id_seguro;
  id_tecnicomec;
  id_tipo_carro;
  id_sede;
  idCarro;
  constructor() {}
  async agregarCarro() {
    let sql = /*sql*/ `INSERT INTO carros (marca_carro, modelo_carro,
        numero_puertas_carro, color_carro, precio_hora_carro, placa_carro,
        id_soat, id_seguro, id_tecnicomec, id_tipo_carro, id_sede)
        VALUES
    (\"${this.marca_carro}\", \"${this.modelo_carro}\", ${this.numero_puertas_carro},
    \"${this.color_carro}\", ${this.precio_hora_carro}, \"${this.placa_carro}\",
    ${this.id_soat}, ${this.id_seguro}, ${this.id_tecnicomec}, ${this.id_tipo_carro}, ${this.id_sede});`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async getPrecioHoraById() {
    let sql = /*sql*/ `SELECT precio_hora_carro FROM carros WHERE id_carro = ${this.idCarro};`;
    try {
      const result = await executeQuery(sql);
      if (result.data.length === 0) {
        throw new Error("No se encontró el carro con el id especificado.");
      }
      return result.data[0].precio_hora_carro;
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodosLosCarros() {
    let sql = /*sql*/ `SELECT c.id_carro AS id,
    c.marca_carro AS marca,
    c.modelo_carro AS modelo,
    c.numero_puertas_carro AS numero_puertas,
    c.color_carro AS color,
    c.precio_hora_carro AS precio_hora,
    c.placa_carro AS placa,
    tc.nombre_tipo_carro AS tipo_carro,
    s.ciudad_sede AS ciudad,
    s.telefono_sede AS telefono,
    s.direccion_sede AS direccion
    FROM carros c
    INNER JOIN tipo_carro tc ON c.id_tipo_carro = tc.id_tipo_carro
    INNER JOIN sedes s ON c.id_sede = s.id_sede;
`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async obtenerCarroPorId() {
    let sql = /*sql*/ `SELECT c.id_carro AS id,
       c.marca_carro AS marca,
       c.modelo_carro AS modelo,
       c.numero_puertas_carro AS numero_puertas,
       c.color_carro AS color,
       c.precio_hora_carro AS precio_hora,
       c.placa_carro AS placa,
       tc.nombre_tipo_carro AS tipo_carro,
       s.ciudad_sede AS ciudad,
       s.telefono_sede AS telefono,
       s.direccion_sede AS direccion
        FROM carros c
        INNER JOIN tipo_carro tc ON c.id_tipo_carro = tc.id_tipo_carro
        INNER JOIN sedes s ON c.id_sede = s.id_sede
        WHERE c.id_carro = ${this.idCarro};`;
    try {
      const result = await executeQuery(sql);
      if (result.data.length === 0) {
        throw new Error("No se encontró el carro con el id especificado.");
      }
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}

export { Carro };
