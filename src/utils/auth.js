import { jwtVerify } from "jose";

const middlewareValidLog = async (req, res, next) => {
  const authorization = req.cookies.User;
  if (!authorization)
    return res
      .status(401)
      .send({ token: "token de autorizacion no proporcionado" });
  try {
    res.cookie("User", authorization, { maxAge: 600000, httpOnly: true });
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

export { middlewareValidLog };
