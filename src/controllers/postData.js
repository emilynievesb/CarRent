import {
  agregarCarro,
  agregarEstadoVigencia,
  agregarFactura,
  agregarNacionalidad,
  agregarNovedad,
  agregarReporteAlquiler,
  agregarRol,
  agregarSede,
  agregarSeguro,
  agregarSoat,
  agregarTecnicomec,
  agregarTipoCarro,
  agregarTipoDocumento,
  agregarTipoNovedad,
  agregarUsuario,
  loginUsuario,
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
    if (error.error.sqlState === "23000") {
      res
        .status(500)
        .json("Se ha ingresado un valor no existente en alguno de los campos");
    } else {
      res.status(500).json(error);
    }
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
    if (error.error.sqlState === "23000") {
      res
        .status(500)
        .json("Se ha ingresado un valor no existente en alguno de los campos");
    } else {
      res.status(500).json(error);
    }
  }
};

const agregarEstadoVigenciaController = async (req, res, next) => {
  try {
    const { EstadoVigencia } = req.body;
    const result = await agregarEstadoVigencia(EstadoVigencia);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarSoatController = async (req, res, next) => {
  try {
    const { FechaInicio, FechaVencimiento, IdEstado } = req.body;
    const result = await agregarSoat(FechaInicio, FechaVencimiento, IdEstado);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarSeguroController = async (req, res, next) => {
  try {
    const { FechaInicio, FechaVencimiento, IdEstado } = req.body;
    const result = await agregarSeguro(FechaInicio, FechaVencimiento, IdEstado);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarTecnicomecController = async (req, res, next) => {
  try {
    const { FechaInicio, FechaVencimiento, IdEstado } = req.body;
    const result = await agregarTecnicomec(
      FechaInicio,
      FechaVencimiento,
      IdEstado
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarTipoNovedadController = async (req, res, next) => {
  try {
    const { Nombre, Precio } = req.body;
    const result = await agregarTipoNovedad(Nombre, Precio);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarTipoCarroController = async (req, res, next) => {
  try {
    const { Nombre } = req.body;
    const result = await agregarTipoCarro(Nombre);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarSedeController = async (req, res, next) => {
  try {
    const { Ciudad, Telefono, Dirección } = req.body;
    const result = await agregarSede(Ciudad, Telefono, Dirección);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarNovedadController = async (req, res, next) => {
  try {
    const { IdTipoNovedad, Descripcion, IdHistorial } = req.body;
    const result = await agregarNovedad(
      IdTipoNovedad,
      Descripcion,
      IdHistorial
    );
    res.status(200).json(result);
  } catch (error) {
    if (error.error.sqlState === "23000") {
      res
        .status(500)
        .json("Se ha ingresado un valor no existente en alguno de los campos");
    } else {
      res.status(500).json(error);
    }
  }
};

const agregarReporteAlquilerController = async (req, res, next) => {
  try {
    const { IdUsuario, IdCarro, FechaInicio, FechaDevolucion } = req.body;

    const result = await agregarReporteAlquiler(
      IdUsuario,
      IdCarro,
      FechaInicio,
      FechaDevolucion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarFacturaController = async (req, res, next) => {
  try {
    const { IdReporte, FechaEntregaCarro } = req.body;
    const result = await agregarFactura(IdReporte, FechaEntregaCarro);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const loginUsuarioController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await loginUsuario(username, password);
    console.log(result);
    res.send({ result });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  agregarCarroController,
  agregarRolController,
  agregarTipoDocumentoController,
  agregarNacionalidadController,
  agregarUsuarioController,
  agregarEstadoVigenciaController,
  agregarSoatController,
  agregarSeguroController,
  agregarTecnicomecController,
  agregarTipoNovedadController,
  agregarTipoCarroController,
  agregarSedeController,
  agregarNovedadController,
  agregarReporteAlquilerController,
  agregarFacturaController,
  loginUsuarioController,
};
