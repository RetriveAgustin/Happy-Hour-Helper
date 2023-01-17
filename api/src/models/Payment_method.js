const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Payment_method",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
              },
              name: {
                type: Sequelize.STRING
              },
              code: {
                type: Sequelize.INTEGER
              },
              expiration_date: {
                type: Sequelize.DATE
              },
              propetary_name: {
                type: Sequelize.STRING
              },
              propetary_last_name: {
                type: Sequelize.STRING
              },
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};
