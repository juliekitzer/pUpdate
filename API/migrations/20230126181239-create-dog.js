'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dogname: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      breed: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      gotchaday: {
        type: Sequelize.DATE
      },
      chipid: {
        type: Sequelize.STRING
      },
      rabiestag: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      spayedorneutered: {
        type: Sequelize.BOOLEAN
      },
      food: {
        type: Sequelize.STRING
      },
      allergies: {
        type: Sequelize.STRING
      },
      sensitivities: {
        type: Sequelize.STRING
      },
      medication: {
        type: Sequelize.STRING
      },
      additional_info: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dogs');
  }
};