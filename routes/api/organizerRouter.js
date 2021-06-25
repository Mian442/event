var express = require("express");
const organizerEmailValidator = require("../../middlewares/organizerEmailValidator");
const organizerValidator = require("../../middlewares/organizerValidator");
const OrganizerModel = require("../../models/organizer");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    let Organizer = await OrganizerModel.getAllOrganizer();
    res.status(200).send(Organizer);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all Organizer!");
  }
});

/* GET Organizers listing. */
router.get("/:id", async (req, res) => {
  try {
    let Organizer = await OrganizerModel.getOrganizerById(req.params.id);
    res.status(200).send(Organizer);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting User Organizer!");
  }
});

router.post(
  "/",
  organizerValidator,
  organizerEmailValidator,
  async (req, res) => {
    try {
      console.log(req.body);
      let Organizer = new OrganizerModel();
      Organizer = await Organizer.addOrganizer(req.body);

      res.status(200).send(Organizer);
    } catch (err) {
      console.log(err);
      res.status(400).send("Error in Adding Organizer!");
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    await OrganizerModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Organizer is Deleted!");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all Organizer!");
  }
});

module.exports = router;
