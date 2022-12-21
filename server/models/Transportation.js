const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Transportation extends Model {}

Transportation.init(
    {
        transportation_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        transportation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ride_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        ride_cost: {
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
        modelName: "transportation",
    }
);

module.exports = Transportation;