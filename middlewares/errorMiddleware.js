export const rutaNoEncontrada = (req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
};

export const manejarErrores = (err, req, res, next) => {
  const status = err.status || 500;
  const mensaje = err.mensaje || err.message || "Error interno del servidor";
  res.status(status).json({ error: mensaje });
};
