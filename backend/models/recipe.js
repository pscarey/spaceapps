module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    tableName: 'recipe',
    classMethods: {
      associate(models) {
        Recipe.hasMany(models.RecipeItem, {
          as: 'recipeItems',
          foreignKey: 'recipeId',
        });
      },
    },
    instanceMethods: {
      toJSON() {
        this.dataValues.ratings = this.ratings;
        this.dataValues.totalRating = this.totalRating;
        return this.dataValues;
      },
    },
  });
  return Recipe;
};
