const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      capacity: {
        type: DataTypes.INTEGER,
      },
      minimum_amount_for_bulk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bulk_discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rating: {
        type: DataTypes.ENUM("0", "1", "2", "3", "4", "5"),
        allowNull: true,
      },
      has_discount: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
