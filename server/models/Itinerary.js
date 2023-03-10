const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const itinerarySchema = new Schema( 
    {
        category: {
            type: String,
            required: true,
        },
        categoryName: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
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
        price: {
            type: Number,
        },
        notes:{
            type: String,
        },
        paid: {
            type: Boolean,
            default: true,
        },
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

    const Itinerary = model("Itinerary", itinerarySchema);

    module.exports = Itinerary;