module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
  }, {
    tableName: 'ingredient',
    instanceMethods: {
      toJSON() {
        return this.dataValues;
      },
    },
    classMethods: {
      associate(models) {
        Ingredient.belongsToMany(models.Source, { as: 'sources', through: 'IngredientSource', foreignKey: 'ingredientId' });
        Ingredient.belongsToMany(models.Season, { as: 'seasons', through: 'IngredientSeason', foreignKey: 'ingredientId' });
      },
    },
  });
  return Ingredient;
};
