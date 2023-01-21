const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Payment_method",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.INTEGER,
      },
      expiration_date: {
        type: DataTypes.DATE,
      },
      propetary_name: {
        type: DataTypes.STRING,
      },
      propetary_last_name: {
        type: DataTypes.STRING,
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
