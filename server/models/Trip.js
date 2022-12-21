const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
    {
        trip_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "account",
                key: "user_id",
            },
        },
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "activity",
                key: "activity_id",
            },
        },
        transportation_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "transportation",
                key: "transportation_id",
            },
        },
        flight_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "flight",
                key: "flight_id",
            },
        },
        hotel_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "hotel",
                key: "hotel_id",
            },
        },
        restaurant_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "restaurant",
                key: "restaurant_id",
            },
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trip",
    }
);

module.exports = Trip;