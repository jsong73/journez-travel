const router = require("express").Router();
const { Transportation } = require("../../models");

//api/transportation
router.post("/", async (req, res) => {
    try{
        const transportationData = await Transportation.create(req.body)
        res.status(200).json({ msg: "Transportation was successfully created!", transportationData })
    } catch(err){
        res.status(400).json(err)
    } 
});

router.get("/", async (req, res) => {
    try{
        const transportationData = await Transportation.findAll();
        const transportation = transportationData.map((data) => data.get({ plain: true }));
        console.log(transportation);
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;