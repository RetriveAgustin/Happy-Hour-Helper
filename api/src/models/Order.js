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
<<<<<<< HEAD
      timestamps: false,
=======
      timestamps: true,
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    }
  );
};
