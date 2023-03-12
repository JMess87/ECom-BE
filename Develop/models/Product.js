// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model (ID, product, price , stock, category_id (fk))
Product.init(
  {
    id: {
      type: DataTypes.INT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    price: {
      type: DataTypes.INT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INT,
      allowNull:false,
    },
    category_id: {
      type:DataTypes.INT,
      references:{
        model:'category',
        key:'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Product;
