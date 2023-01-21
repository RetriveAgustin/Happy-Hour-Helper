const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Brand",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      has_discount: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
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
