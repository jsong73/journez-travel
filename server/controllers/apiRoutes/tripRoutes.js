const router = require("express").Router();
const {
    Account,
    Activity,
    Flight,
    Hotel,
    Restaurant,
    Transportation,
    Trip,
} = require("../../models");

//api/trips
router.post("/", async (req, res) => {
    try{
        const tripsData = await Trip.create(req.body)
        res.status(200).json({ msg: "Trip details were successfully created!", tripsData })
    } catch(err){
        res.status(400).json(err)
    }
});

//api/trips to get ALL the information from ALL users and ALL related trip info
router.get("/", async (req, res) =>{
    try{
        const tripsData = await Trip.findAll({
            include:[
                {
                    model: Account,
                    attributes: { exclude: "password" },
                },
                {
                    model: Activity,
                },
                {
                    model: Flight,
                },
                {
                    model: Hotel,
                },
                {
                    model: Restaurant,
                },
                {
                    model: Transportation,
                },
            ],
        });

        const trips = tripsData.map((data) => data.get({ plain: true }));
        res.status(200).json(trips);
        console.log(trips);
    } catch(err){
        res.status(500).json(err);
    }
});

router.get("/:user_id", async (req, res) => {
    try{
        const tripsData = await Trip.findByPk(req.params.user_id, {
            include: [
                {
                    model: Account,
                    attributes: { exclude: "password" },
                },
                {
                    model: Activity,
                },
                {
                    model: Flight,
                },
                {
                    model: Hotel,
                },
                {
                    model: Restaurant,
                },
                {
                    model: Transportation,
                },
            ],
        });
        const trips = tripsData.get({ plain: true });
        res.status(200).json(trips);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;

