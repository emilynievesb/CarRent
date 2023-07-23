import { HistorialNovedades } from "../entities/historialnovedades.js";

const actualizacionHistorial = async (
  id_historial_novedades,
  acumulado_daños
) => {
  const historial = new HistorialNovedades();
  historial.id_historial_novedades = id_historial_novedades;
  historial.acumulado_daños = acumulado_daños;
  return historial.actualizacionHistorial(
    id_historial_novedades,
    acumulado_daños
  );
};

export { actualizacionHistorial };
