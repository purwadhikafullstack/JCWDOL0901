"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      province_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      postal_code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    // TODO: addConstraint 1 (from id to Branches.city_id);
  },
  async down(queryInterface, Sequelize) {
    // TODO: dropConstraint 1
    await queryInterface.dropTable("Cities");
  },
};
