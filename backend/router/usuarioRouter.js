const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

router.get("/", usuarioController.getUsuarios);
router.post("/login", usuarioController.login);
router.get("/:id", usuarioController.getUsuarioById);
router.post("/", usuarioController.createUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

module.exports = router;
