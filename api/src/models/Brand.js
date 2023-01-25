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
      timestamps: true,
    }
  );
};
