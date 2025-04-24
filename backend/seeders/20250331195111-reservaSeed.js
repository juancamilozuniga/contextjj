"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "reservas",
      [
        {
          usuario_id: 1,
          fechaReserva: "2028-02-11",
          lugar: "carro",
          nombreReserva: "reserva car audio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          fechaReserva: "2010-03-05",
          lugar: "moto",
          nombreReserva: "moto gp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reservas", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
