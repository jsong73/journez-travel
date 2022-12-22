const router = require("express").Router();
const { Restaurant } = require("../../models");

//api/restaurant
router.post("/", async (req, res) => {
    try{
        const restaurantData = await Restaurant.create(req.body)
        res.status(200).json({ msg: "Restaurant was successfully created!", restaurantData })
    } catch(err){
        res.status(400).json(err)
    }
});

router.get("/", async (req, res) => {
    try{
        const restaurantData = await Restaurant.findAll();
        const restaurant = restaurantData.map((data) => data.get({ plain: true }));
        res.status(200).json(restaurant);
        console.log(restaurant);
    } catch (err){
        res.status(500).json(err)
    }
});

module.exports = router;
