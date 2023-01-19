const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Sub_category",
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
      }
    },
    {
      paranoid: true,
      timestamps: false,
    }
  );
};
