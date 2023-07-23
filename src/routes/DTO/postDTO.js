import { object, string, number, date } from "yup";

const agregarCarroDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      Marca: string()
        .strict()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
      Modelo: string().strict().required(),
      NumeroPuertas: number().strict().required(),
      Color: string()
        .strict()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
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
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarTipoDocumentoDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      TipoDocumento: string()
        .strict()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarNacionalidadDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      Nacionalidad: string()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarUsuarioDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      Documento: number().required(),
      IdTipoDocumento: number().required(),
      Nombre: string()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
      Correo: string().email().required(),
      Direccion: string().required(),
      Telefono: number().required(),
      IdNacionalidad: number().required(),
      Usuario: string().required(),
      Contraseña: string().required(),
      IdRol: number().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarEstadoVigenciaDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      EstadoVigencia: string()
        .matches(
          /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/,
          "Solo se permiten letras y espacios"
        )
        .required("El Estado de Vigencia es obligatorio"),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarSoatDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      FechaInicio: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
      FechaVencimiento: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
      IdEstado: number().required("El Id de Estado es obligatorio"),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarSeguroDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      FechaInicio: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
      FechaVencimiento: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
      IdEstado: number().required("El Id de Estado es obligatorio"),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarTecnicomecDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      FechaInicio: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
      FechaVencimiento: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
      IdEstado: number().required("El Id de Estado es obligatorio"),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export {
  agregarCarroDTO,
  agregarRolDTO,
  agregarTipoDocumentoDTO,
  agregarNacionalidadDTO,
  agregarUsuarioDTO,
  agregarEstadoVigenciaDTO,
  agregarSoatDTO,
  agregarSeguroDTO,
  agregarTecnicomecDTO,
};
