const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Product",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
              },
              name: {
                type: Sequelize.STRING
              },
              img: {
                type: Sequelize.STRING,
                allowNull: true
              },
              price: {
                type: Sequelize.FLOAT
              },
              capacity: {
                type: Sequelize.INTEGER
              },
              minimum_amount_for_bulk: {
                type: Sequelize.INTEGER,
                allowNull: true
              },
              bulk_discount: {
                type: Sequelize.FLOAT,
                allowNull: true
              },
              stock: {
                type: Sequelize.INTEGER,
                allowNull: true
              },
              rating: {
                type: DataTypes.ENUM("0","1","2","3","4","5"),
                allowNull: true
              },
        },
        {
            paranoid: true,
            timestamps: false,
        }
    );
};