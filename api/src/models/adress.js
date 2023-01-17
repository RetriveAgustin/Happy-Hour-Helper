const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "adress",
        {
            id: {
                type: DataTypes.STRING(100),
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            },
            street: {
                type: DataTypes.STRING,
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            description: {
                type: DataTypes.STRING(250),
                allowNull: true,
            },
        },
        {
            paranoid: true,
        },
        {
            timestamps: false,
        }
    );
};
