const router = require("express").Router();
const { Activity } = require("../../models");

//api/activity
router.post("/", async (req, res) => {
    try{
        const activityData = await Activity.create(req.body)
        res.status(200).json({ msg: "Activity was successfully created!", activityData })
    } catch(err){
        res.status(400).json(err)
    }
});

router.get("/", async (req, res) => {
    try{
        const activityData = await Activity.findAll();
        const activity = activityData.map((data) => data.get({ plain: true }));
        res.status(200).json(activity);
        console.log(activity);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;