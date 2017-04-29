'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('ingredient', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      calories: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      daysToProduce: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      energyUsedToProduce: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      co2: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
