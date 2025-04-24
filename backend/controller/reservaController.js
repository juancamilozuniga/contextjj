const reservaService = require("../services/reservaServices");

class ReservaController {
  async getReservas(req, res) {
    const reservas = await reservaService.getAllReservas();
    res.json(reservas);
  }

  async getReservaById(req, res) {
    const reserva = await reservaService.getReservaById(req.params.id);
    reserva ? res.json(reserva) : res.status(404).json({ error: "Reserva no encontrada" });
  }

  async createReserva(req, res) {
    const nuevaReserva = await reservaService.createReserva(req.body);
    res.status(201).json(nuevaReserva);
  }

  async deleteReserva(req, res) {
    await reservaService.deleteReserva(req.params.id);
    res.json({ message: "Reserva eliminada" });
  }
}

module.exports = new ReservaController();
