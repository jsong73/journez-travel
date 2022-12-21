const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Activity extends Model {}

Activity.init(
    {
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        activity_cost: {
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
        modelName: "activity",
    }
);

module.exports = Activity;
