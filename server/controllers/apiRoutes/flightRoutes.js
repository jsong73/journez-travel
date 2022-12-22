const router = require("express").Router();
const { Flight } = require("../../models");

//api/flight
router.post("/", async (req, res) => {
    try{
        const flightData = await Flight.create(req.body)
        res.status(200).json({ msg: "Flight details was successfully created!", flightData })
    } catch(err){
        res.status(400).json(err)
    }
});

router.get("/", async (req, res) => {
    try{
        const flightData = await Flight.findAll();
        const flight = flightData.map((data) => data.get({ plain: true }));
        res.status(200).json(flight);
        console.log(flight);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;