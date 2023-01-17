const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Adress",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
              },
              street: {
                type: Sequelize.STRING
              },
              number: {
                type: Sequelize.INTEGER,
                allowNull: true
              },
              description: {
                type: Sequelize.STRING,
                allowNull: true
              },
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};


