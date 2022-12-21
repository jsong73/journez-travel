const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Restaurant extends Model {}

Restaurant.init(
    {
        restaurant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        restaurant: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dining_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        bill_amount: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        paid_in_full: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "restaurant",
    }
);

module.exports = Restaurant;