const router = require("express").Router();
const tripRoutes = require("./tripRoutes");
const accountRoutes = require("./accountRoutes");
const activityRoutes = require("./activityRoutes");
const flightRoutes = require("./flightRoutes");
const hotelRoutes = require("./hotelRoutes");
const restaurantRoutes = require("./restaurantRoutes");
const transportationRoutes = require("./transportationRoutes");

router.use("/account", accountRoutes);
router.use("/trips", tripRoutes);
router.use("/activity", activityRoutes);
router.use("/flight", flightRoutes);
router.use("/hotel", hotelRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/transportation", transportationRoutes);

module.exports = router;