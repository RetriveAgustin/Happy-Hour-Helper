const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
      },
      delivered: {
        type: DataTypes.BOOLEAN,
      },
      canceled: {
        type: DataTypes.BOOLEAN,
      },
      adress: {
        type: DataTypes.UUID,
      },
      payment_method: {
        type: DataTypes.UUID,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
