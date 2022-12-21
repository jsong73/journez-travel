const sequelize = require("../config/connection");
const {
  Account,
  Activity,
  Flight,
  Hotel,
  Restaurant,
  Transportation,
  Trip,
} = require("../models");

const accountData = require("./Account.json");
const activityData = require("./Activity.json");
const flightData = require("./Flight.json");
const hotelData = require("./Hotel.json");
const restaurantData = require("./Restaurant.json");
const transportationData = require("./Transportation.json");
const tripData = require("./Trip.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const accounts = await Account.bulkCreate(accountData, {
    individualHooks: true,
    returning: true,
  });

  const activities = await Activity.bulkCreate(activityData, {
    individualHooks: true,
    returning: true,
  });

  const flights = await Flight.bulkCreate(flightData, {
    individualHooks: true,
    returning: true,
  });

  const hotels = await Hotel.bulkCreate(hotelData, {
    individualHooks: true,
    returning: true,
  });

  const restaurants = await Restaurant.bulkCreate(restaurantData, {
    individualHooks: true,
    returning: true,
  });

  const transportation = await Transportation.bulkCreate(transportationData, {
    individualHooks: true,
    returning: true,
  });

  const trip = await Trip.bulkCreate(tripData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
