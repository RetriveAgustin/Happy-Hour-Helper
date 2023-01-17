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
                type: DataTypes.STRING
            },
            lastname: {
                type: DataTypes.STRING
            },
            mail: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            fauvorites: {
                type: Sequelize.ARRAY(Sequelize.INTEGER),
                allowNull: true,
            },
            createdInGoogle: {
                type: DataTypes.BOOLEAN,
            }
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};