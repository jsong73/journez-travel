const router = require("express").Router();
const { Hotel } = require("../../models");

//api/hotel
router.post("/", async (req, res) => {
    try{
        const hotelData = await hotel.create(req.body)
        res.status(200).json({ msg: "Hotel was successfully created!", hotelData })
    } catch(err){
        res.status(400).json(err)
    }
});

router.get("/", async (req, res) => {
    try{
        const hotelData = await Hotel.findAll();
        const hotel = hotelData.map((data) => data.get({ plain: true }));
        res.status(200).json(hotel);
        console.log(hotel);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;