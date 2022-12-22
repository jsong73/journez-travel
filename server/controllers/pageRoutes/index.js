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


router.get("/homepage", async (req, res) => {
    try{
        const tripsData = await Trip.findAll({
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
        const trips = tripsData.map((data) => data.get({ plain: true }));
        console.log(trips);
        res.render("homepage", {
            trips,
            loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try{
        res.render("signup");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/signin", async (req, res) => {
    try{
        res.render("signin");
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/createtrip", async (req, res) => {
    try{
        res.render("createtrip");
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/activity", async (req, res) => {
    try{
        res.render("activity");
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/transportation", async (req, res) => {
    try{
        res.render("transportation");
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/restaurant", async (req, res) => {
    try{
        res.render("restaurant");
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/logout", async (req, res) => {
    try{
        res.render("logout");
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/payment", async (req, res) => {
    try{
        const tripsData = await Trip.findAll({
            include: [
                {
                    model: Account,
                    attributes: { exclude: "password"},
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
        console.log(trips);
        res.render("payment", {
            trips,
            loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;