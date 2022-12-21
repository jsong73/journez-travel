const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hotel extends Model {}

Hotel.init(
    {
        hotel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        hotel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        checkin_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        checkout_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        room_bill: {
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
        modelName: "hotel",
    }
);

module.exports = Hotel;