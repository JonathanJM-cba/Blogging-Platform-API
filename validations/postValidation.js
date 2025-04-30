const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorPost = [
  check("title")
    .exists()
    .withMessage("El campo title debe existir")
    .notEmpty()
    .withMessage("El campo title no debe estar vacío")
    .isString()
    .withMessage("El campo title debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo title no debe superar los 255 caracteres"),
  check("content")
    .exists()
    .withMessage("El campo content debe existir")
    .notEmpty()
    .withMessage("El campo content no debe estar vacío")
    .isString()
    .withMessage("El campo content debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo content no debe superar los 255 caracteres"),
  check("category")
    .exists()
    .withMessage("El campo category debe existir")
    .notEmpty()
    .withMessage("El campo category no debe estar vacío")
    .isString()
    .withMessage("El campo category debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo category no debe superar los 255 caracteres"),
  check("tags")
    .exists()
    .withMessage("El array tags debe existir")
    .notEmpty()
    .withMessage("El array tags no debe estar vacío")
    .isArray({ min: 1 })
    .withMessage(
      "El campo tags es un array y debe contener al menos un elemento"
    ),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorPost };
