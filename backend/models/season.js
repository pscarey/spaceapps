module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    name: DataTypes.STRING,
  }, {
    tableName: 'season',
    instanceMethods: {
      toJSON() {
        return this.dataValues;
      },
    },
  });
  return Season;
};
