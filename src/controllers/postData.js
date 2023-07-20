import {
  agregarCarro,
  agregarNacionalidad,
  agregarRol,
  agregarTipoDocumento,
  agregarUsuario,
} from "../services/postServices.js";

const agregarCarroController = async (req, res, next) => {
  try {
    const {
      Marca,
      Modelo,
      NumeroPuertas,
      Color,
      Precioxhora,
      Placa,
      IdSoat,
      IdSeguro,
      IdTecnicomecanica,
      IdTipoCarro,
      IdSede,
    } = req.body;
    const result = await agregarCarro(
      Marca,
      Modelo,
      NumeroPuertas,
      Color,
      Precioxhora,
      Placa,
      IdSoat,
      IdSeguro,
      IdTecnicomecanica,
      IdTipoCarro,
      IdSede
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarRolController = async (req, res, next) => {
  try {
    const { Rol } = req.body;
    const result = await agregarRol(Rol);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarTipoDocumentoController = async (req, res, next) => {
  try {
    const { TipoDocumento } = req.body;
    const result = await agregarTipoDocumento(TipoDocumento);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarNacionalidadController = async (req, res, next) => {
  try {
    const { Nacionalidad } = req.body;
    const result = await agregarNacionalidad(Nacionalidad);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarUsuarioController = async (req, res, next) => {
  try {
    const {
      Documento,
      IdTipoDocumento,
      Nombre,
      Correo,
      Direccion,
      Telefono,
      IdNacionalidad,
      Usuario,
      Contraseña,
      IdRol,
    } = req.body;
    const result = await agregarUsuario(
      Documento,
      IdTipoDocumento,
      Nombre,
      Correo,
      Direccion,
      Telefono,
      IdNacionalidad,
      Usuario,
      Contraseña,
      IdRol
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  agregarCarroController,
  agregarRolController,
  agregarTipoDocumentoController,
  agregarNacionalidadController,
  agregarUsuarioController,
};
