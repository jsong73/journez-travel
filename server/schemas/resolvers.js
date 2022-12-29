const { AuthenticationError } = require("apollo-server-express");
const { User, Trip, Itinerary } = require("../models");


const resolvers = {
    Query: {
        //finding all users
        users: async () => {
            return User.find().populate("trips");
        },
        //find a single user
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("trips");
        },
        //find all trips
        trips: async () => {
            return Trip.find().populate("itineraries")
        },
        //find a single trip
        trip: async (parent, { tripId }) => {
            return Trip.findOne({ _id: tripId }).populate("itineraries");
        },
        //find a single itinerary
        itinerary: async (parent, { itineraryId }) => {
            return Itinerary.findOne({ _id: itineraryId });
        },
        //finding me
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError("You must be logged in.");
        },
    },

    // Mutation: {

    // }

}

module.exports = resolvers; 