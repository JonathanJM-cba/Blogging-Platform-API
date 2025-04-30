/**
 * Función personalizada para el manejo de errores HTTP
 * @param {Response} res - Pasar la respuesta al cliente
 * @param {String} message - Pasar el mensaje de error
 * @param {Number} code - Pasar el código http de error
 */
const handleHttpError = (res, message, code = 400) => {
  res.status(code).json({ error: message });
};

module.exports = handleHttpError;
