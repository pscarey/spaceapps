module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    name: DataTypes.STRING,
  }, {
    tableName: 'season',
    classMethods: {
      associate(models) {
        Season.belongsToMany(models.Ingredient, { through: 'IngredientSeason', foreignKey: 'seasonId', onDelete: 'CASCADE' });
      },
    },
    instanceMethods: {
      toJSON() {
        return this.dataValues;
      },
    },
  });
  return Season;
};
