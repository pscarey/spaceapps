module.exports = (sequelize, DataTypes) => {
  const IngredientSource = sequelize.define('IngredientSource', {
    ingredientId: DataTypes.STRING,
    sourceId: DataTypes.STRING,
  }, {
    tableName: 'ingredient_source',
  });
  return IngredientSource;
};
