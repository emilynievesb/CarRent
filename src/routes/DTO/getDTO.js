import { number, object } from "yup";

const obtenerCarroPorIdDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idCarro: number().positive().required(),
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
      idNovedad: number().positive().required(),
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
      idReporte: number().positive().required(),
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
      idFactura: number().positive().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerUsuarioPorIdDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idUsuario: number().positive().required(),
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
  obtenerUsuarioPorIdDTO,
};
