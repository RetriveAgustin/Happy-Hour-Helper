const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Category",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
              },
              name: {
                type: Sequelize.STRING
              },
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};