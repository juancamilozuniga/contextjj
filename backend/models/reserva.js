"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserva.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
      });
    }
  }
  Reserva.init(
    {
      fechaReserva: DataTypes.STRING,
      lugar: DataTypes.STRING,
      nombreReserva: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Reserva",
    }
  );
  return Reserva;
};
