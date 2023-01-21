const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Offer",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      initial_date: {
        type: DataTypes.DATE,
      },
      expiration_date: {
        type: DataTypes.DATE,
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
