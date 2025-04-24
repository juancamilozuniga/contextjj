const express = require("express");
const router = express.Router();
const reservaController = require("../controller/reservaController");

router.get("/", reservaController.getReservas);
router.get("/:id", reservaController.getReservaById);
router.post("/", reservaController.createReserva);
router.delete("/:id", reservaController.deleteReserva);

module.exports = router;
