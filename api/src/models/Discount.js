const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Discount",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      initial_date: {
        type: DataTypes.DATE,
      },
      expiration_date: {
        type: DataTypes.DATE,
      },
      discount_amount: {
        type: DataTypes.INTEGER,
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
