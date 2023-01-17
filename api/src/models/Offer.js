const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Offer",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
              },
              name: {
                type: Sequelize.STRING
              },
              price: {
                type: Sequelize.FLOAT
              },
              img: {
                type: Sequelize.STRING,
                allowNull: true
              },
              description: {
                type: Sequelize.STRING,
                allowNull: true
              },
              percentage: {
                type: Sequelize.BOOLEAN
              },
              initial_date: {
                type: Sequelize.DATE
              },
              expiration_date: {
                type: Sequelize.DATE
              },
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};