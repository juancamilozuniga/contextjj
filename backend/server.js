const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const app = express();

env.config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json());

const ReservaRouter = require("./router/reservaRouter");
const usuarioRoutes = require("./router/usuarioRouter");

app.use("/apir", ReservaRouter);
app.use("/apiu", usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor en el puerto:", PORT);
});
