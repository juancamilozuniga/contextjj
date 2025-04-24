const { Model } = require("sequelize");
const { Reserva } = require("../models");
const { Usuario } = require("../models");

class ReservaService {
  async getAllReservas() {
    return await Reserva.findAll({
      attributes: [
        "id",
        "fechaReserva",
        "lugar",
        "nombreReserva",
        "usuario_id",
      ],
      include: {
        model: Usuario,
        as: "usuario",
        attributes: ["nombre"],
      },
    });
  }

  async getReservaById(id) {
    return await Reserva.findByPk(id);
  }

  async createReserva(data) {
    return await Reserva.create(data);
  }

  async deleteReserva(id) {
    return await Reserva.destroy({ where: { id } });
  }
}

module.exports = new ReservaService();
