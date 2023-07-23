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

export { obtenerCarroPorIdDTO };
