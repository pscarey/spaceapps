'use strict';

var fs = require('fs');
var query = fs.readFileSync('migrations/seed.sql').toString();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('ingredient', 'water', {
      allowNull: true,
      type: Sequelize.DOUBLE,
    });
  },
};
