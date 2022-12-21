const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Flight extends Model {}

Flight.init(
    {
        flight_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        airline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flight_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        flight_time: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        seat_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        flight_cost: {
            type: DataTypes.DECIMAL(10, 2),
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
        modelName: "flight",
    }
);

module.exports = Flight;