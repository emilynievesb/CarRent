import { jwtVerify } from "jose";

const middlewareValidLogAdmin = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res
      .status(401)
      .send({ token: "token de autorizacion no proporcionado" });
  try {
    const encoder = new TextEncoder();
    const jwData = await jwtVerify(
      authorization,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    const { id_rol } = jwData.payload.json;
    console.log(jwData.payload.json);

    if (id_rol !== 2) {
      throw new Error("El usuario no tiene permitido usar esta ruta");
    }
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
};
const middlewareValidLogClient = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res
      .status(401)
      .send({ token: "token de autorizacion no proporcionado" });
  try {
    const encoder = new TextEncoder();
    const jwData = await jwtVerify(
      authorization,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwData.payload.json);
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export { middlewareValidLogAdmin, middlewareValidLogClient };
