const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./config/configDb");
require("dotenv").config();

const port = process.env.PORT || 3000;
const apiRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Blog Personal");
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Servidor API Blog Personal escuchando en: localhost:${port}`);
});

dbConnection();
