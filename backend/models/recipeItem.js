module.exports = (sequelize, DataTypes) => {
  const RecipeItem = sequelize.define('RecipeItem', {
    name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    unit: DataTypes.INTEGER,
  }, {
    tableName: 'recipeItem',
    classMethods: {
      associate(models) {
        RecipeItem.belongsTo(models.Recipe, {
          as: 'recipe',
          onDelete: 'CASCADE',
          foreignKey: 'recipeId',
        });
        RecipeItem.belongsTo(models.Ingredient, {
          as: 'ingredient',
          foreignKey: 'ingredientId',
        });
      },
    },
    instanceMethods: {
      toJSON() {
        return this.dataValues;
      },
    },
  });
  return RecipeItem;
};
