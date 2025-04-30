const { Sequelize } = require("sequelize");
require("dotenv").config();

const nameDb = process.env.DB_NAME;
const userDb = process.env.DB_USER;
const passwordDb = process.env.DB_PASSWORD;
const portDb = process.env.DB_PORT;
const hostDb = process.env.DB_HOST;

const sequelize = new Sequelize({
  database: nameDb,
  username: userDb,
  password: passwordDb,
  port: portDb,
  host: hostDb,
  dialect: "postgres",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("CONECTADO A LA BD DE BLOG PERSONAL");
  } catch (error) {
    console.log("Error al intentar conectarse a la BD: ", error);
  }
};

module.exports = { sequelize, dbConnection };
