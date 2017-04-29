module.exports = (sequelize, DataTypes) => {
  const Source = sequelize.define('Source', {
    name: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
  }, {
    tableName: 'source',
    classMethods: {
      associate(models) {
        Source.belongsToMany(models.Ingredient, { through: 'IngredientSource', foreignKey: 'sourceId', onDelete: 'CASCADE' });
      },
    },
    instanceMethods: {
      toJSON() {
        return this.dataValues;
      },
    },
  });
  return Source;
};
