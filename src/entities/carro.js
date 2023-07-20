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
}

export { Carro };
