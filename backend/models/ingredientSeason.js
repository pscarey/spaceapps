module.exports = (sequelize, DataTypes) => {
  const IngredientSeason = sequelize.define('IngredientSeason', {
    ingredientId: DataTypes.STRING,
    seasonId: DataTypes.STRING,
  }, {
    tableName: 'ingredient_season',
  });
  return IngredientSeason;
};
