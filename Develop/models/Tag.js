const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id :{
    type: DataTypes, INT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    tag_name: DataTypes.CHAR
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
