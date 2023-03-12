const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init( // define columns (ID, PRODUCT_ID, TAG_ID)
  {
    id: {
      type: DataTypes, INT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes, INT,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
      tag_id: {
        type: DataTypes.INT,
        references: {
          model: 'tag',
          key: 'id',
        },
      }
    },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
