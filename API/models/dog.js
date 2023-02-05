'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dog.hasMany(models.JoinTable, {
        foreignKey: 'dogid'
      });
      Dog.hasMany(models.Activity, {
        foreignKey: 'dogid'
      });
    }
  }
  Dog.init({
    dogname: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    breed: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gotchaday: DataTypes.DATE,
    chipid: DataTypes.STRING,
    rabiestag: DataTypes.STRING,
    gender: DataTypes.STRING,
    spayedorneutered: DataTypes.BOOLEAN,
    food: DataTypes.STRING,
    allergies: DataTypes.STRING,
    sensitivities: DataTypes.STRING,
    medication: DataTypes.STRING,
    additional_info: DataTypes.STRING,
    Profilephoto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};