'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.Dog, {
        foreignKey: 'dogid',
        onDelete: 'CASCADE'
      })
    }
  }
  Activity.init({
    dogid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    activity: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};