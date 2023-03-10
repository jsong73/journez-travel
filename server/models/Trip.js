const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const tripSchema = new Schema(
    {
        tripName: {
            type: String,
            required: "Please enter a trip name!",
            trim: true,
        },
        description: {
            type: String,
            maxlength: 280,
            minlength: 1,
        },
        location: {
            type: String,
            required: "Please enter a location!",
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
        itineraries: [
            {
                type: Schema.Types.ObjectId,
                ref: "Itinerary",
            },
        ],
    },
    {
        toJSON: {
        // used for formatting and combining fields and de-composing a single value into multiple values before storing it in the collection.
        virtuals: true,
        },
        id: false,
        versionKey: false,
    }
    );

const Trip = model("Trip", tripSchema);

module.exports = Trip;