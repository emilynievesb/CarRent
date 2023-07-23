import { Carro } from "../entities/carro.js";

const getPrecioHoraById = async (id) => {
  const carro = new Carro();
  carro.idCarro = id;
  return carro.getPrecioHoraById();
};

export { getPrecioHoraById };
