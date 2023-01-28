'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JoinTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models)    {
      JoinTable.belongsTo(models.User, {
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
    JoinTable.belongsTo(models.Dog, {
      foreignKey: 'dogid',
      onDelete: 'CASCADE'
    })
  }
  }
  JoinTable.init({
    userid: DataTypes.INTEGER,
    dogid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JoinTable',
  });
  return JoinTable;
};