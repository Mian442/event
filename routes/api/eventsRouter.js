var express = require("express");
const duplicateeventValidator = require("../../middlewares/duplicateeventValidator");
const eventValidator = require("../../middlewares/eventValidator");
const EventModel = require("../../models/events");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    let Event = await EventModel.getAllEvent();
    res.status(200).send(Event);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all Event!");
  }
});

/* GET Events listing. */
router.get("/:id", async (req, res) => {
  try {
    let Event = await EventModel.getEventById(req.params.id);
    res.status(200).send(Event);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting User Event!");
  }
});

router.post("/", eventValidator, duplicateeventValidator, async (req, res) => {
  try {
    console.log(req.body);
    let Event = new EventModel();
    Event = await Event.addEvent(req.body);

    res.status(200).send(Event);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Adding Event!");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await EventModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Event is Deleted!");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all Event!");
  }
});

module.exports = router;
