import { number, string, date, object } from "yup";

const obtenerCarroPorIdDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idCarro: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerNovedadPorIdDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idNovedad: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerReportePorIdDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idReporte: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerFacturaPorIdDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idFactura: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export {
  obtenerCarroPorIdDTO,
  obtenerNovedadPorIdDTO,
  obtenerReportePorIdDTO,
  obtenerFacturaPorIdDTO,
};
