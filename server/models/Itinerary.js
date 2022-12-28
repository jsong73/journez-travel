const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const itinerarySchema = new Schema( 
    {
        category: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
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
        notes:{
            type: String,
        },
        status: {
            type: Boolean,
        },
    });

    const Itinerary = model("Itinerary", itinerarySchema);

    module.exports = Itinerary;