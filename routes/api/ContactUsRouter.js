var express = require("express");
const contactUsValidator = require("../../middlewares/contactUsValidator");
const ContactUsModel = require("../../models/contactUs");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    let ContactUs = await ContactUsModel.getAllContactUs();
    res.status(200).send(ContactUs);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all ContactUs!");
  }
});

/* GET ContactUss listing. */
router.get("/:id", async (req, res) => {
  try {
    let ContactUs = await ContactUsModel.getContactUsById(req.params.id);
    res.status(200).send(ContactUs);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting User ContactUs!");
  }
});

router.post("/", contactUsValidator, async (req, res) => {
  try {
    console.log(req.body);
    let ContactUs = new ContactUsModel();
    ContactUs = await ContactUs.addContactUs(req.body);

    res.status(200).send(ContactUs);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Adding ContactUs!");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ContactUsModel.findByIdAndDelete(req.params.id);
    res.status(200).send("ContactUs is Deleted!");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all ContactUs!");
  }
});

module.exports = router;
