const { AuthenticationError } = require("apollo-server-express");
const { User, Trip, Itinerary } = require("../models");
// const { signToken } = require("../utils/auth");

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

    Mutation: {
        //add user
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { user, token };
        },
        //log in 
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("No user found with this email!");
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError("Incorrect credentials!");
            }
            const token = signToken(user);
            return { user, token };
        },
        //add trip
        addTrip: async (parent, { userId, tripName, description, location, startDate, endDate }, context) => {
            // if (context.user) {
            const trip = await Trip.create({
                tripName, 
                description,
                location,
                startDate,
                endDate,
            });
            await User.findOneAndUpdate(
                { _id: userId},
                { $addToSet: { trips: trip._id}}
            );
            return trip;
            
        },
        //update trip
        updateTrip: async (parent, { tripId, tripName, description, location, startDate, endDate }) => {
            return await Trip.findOneAndUpdate(
                { _id: tripId },
                {$set: { tripName, description, location, startDate, endDate }, },
                { new: true }
            );
        },
        //remove trip
        removeTrip: async (parent, { tripId }) => {
            return Trip.findOneAndDelete({ _id: tripId });
        },
        //add itinerary
        addItinerary: async (parent, { tripId, category, categoryName, location, startDate, endDate, price, notes, paid }, context) => {
        // if (context.user) {
            const itinerary = await Itinerary.create({ category, categoryName, location, startDate, endDate, price, notes, paid });

            await Trip.findOneAndUpdate(
                { _id: tripId },
                { $addToSet: { itineraries: itinerary._id }}
            );
            return itinerary;
        },
        //update itinerary
        updateItinerary: async (parent, { itineraryId, category, categoryName, location, startDate, endDate, price, notes, paid }) => {
            return await Itinerary.findOneAndUpdate(
                {_id: itineraryId},
                {$set: {category, categoryName, location, startDate, endDate, price, notes, paid }, },
                { new: true }
            );
        },
        //remove itinerary
        removeItinerary: async (parent, {tripId, itineraryId }) => {
            return await Trip.findOneAndUpdate(
                {_id: tripId},
                // $eq matches documents where the value of a field equals the specified value
                {$pull: {itineraries: { $eq: itineraryId }}},
                {new: true}
            );
        },
    },
};

module.exports = resolvers; 