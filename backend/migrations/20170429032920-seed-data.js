'use strict';

var fs = require('fs');
var query = fs.readFileSync('migrations/seed.sql').toString();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(query, {
      type: queryInterface.sequelize.QueryTypes.RAW
    });
  },
};
