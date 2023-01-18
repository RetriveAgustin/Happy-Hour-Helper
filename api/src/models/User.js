const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      mail: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fauvourites: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true,
      },
      created_in_google: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      paranoid: true,
      timestamps: false,
    }
  );
};
