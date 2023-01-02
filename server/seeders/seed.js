const db = require("../config/connection");
const { User, Trip } = require("../models");
const userSeeds = require("./userSeeds.json")
const tripSeeds = require("./tripSeeds.json");


db.once("open", async () => {
    try{
        await User.deleteMany({});
        await Trip.deleteMany({});

        await User.create(userSeeds);
        await Trip.create(tripSeeds);


    } catch (err){
        console.log(err);
        process.exit(1);
    }
    console.log("Done!")
    process.exit(0);
})