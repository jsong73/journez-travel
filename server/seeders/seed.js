const db = require("../config/connection");
const { User, Trip, Itinerary } = require("../models");
const userSeeds = require("./userSeeds.json")
const tripSeeds = require("./tripSeeds.json");
const itinerarySeeds = require("./itinerarySeeds.json");


db.once("open", async () => {
    try{
        await User.deleteMany({});
        await Trip.deleteMany({});
        await Itinerary.deleteMany({});

        await User.create(userSeeds);
        await Trip.create(tripSeeds);
        await Itinerary.create(itinerarySeeds);

    } catch (err){
        console.log(err);
        process.exit(1);
    }
    console.log("Done!")
    process.exit(0);
})