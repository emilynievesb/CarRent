import { object, string, number, date } from "yup";

const agregarCarroDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      Marca: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .required(),
      Modelo: string().strict().required(),
      NumeroPuertas: number().strict().required(),
      Color: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .required(),
      Precioxhora: number().strict().required(),
      Placa: string().required(),
      IdSoat: number().strict().required(),
      IdSeguro: number().strict().required(),
      IdTecnicomecanica: number().strict().required(),
      IdTipoCarro: number().strict().required(),
      IdSede: number().strict().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarRolDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      Rol: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { agregarCarroDTO, agregarRolDTO };
