'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('recipeItem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      recipeId: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      ingredientId: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      unit: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(2048)
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
};
