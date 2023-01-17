const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Discount",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
              },
              initial_date: {
                type: Sequelize.DATE
              },
              expiration_date: {
                type: Sequelize.DATE
              },
              discount_amount: {
                type: Sequelize.FLOAT
              }
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};