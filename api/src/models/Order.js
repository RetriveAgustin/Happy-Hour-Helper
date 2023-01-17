const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Order",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
              },
              date: {
                type: Sequelize.DATE
              },
              delivered: {
                type: Sequelize.BOOLEAN
              },
              canceled: {
                type: Sequelize.BOOLEAN
              },
              adress: {
                type: Sequelize.UUID,
              },
              payment_method: {
                type: Sequelize.UUID,
              },
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};
