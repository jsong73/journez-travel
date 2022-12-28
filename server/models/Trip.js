const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const tripSchema = new Schema(
    {
        tripName: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        startDate: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        endDate: {
            type: Date,
            deafult: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        schedules: [
            {
                type: Schema.Types.ObjectId,
                ref: "Schedule",
            },
        ],
    });

const Trip = model("Trip", tripSchema);

module.exports = Trip;