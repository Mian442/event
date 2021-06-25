const OrganizerModel = require("../models/organizer");
module.exports = async function (req, res, next) {
  let Organizer = await OrganizerModel.findOne({ email: req.body.email });
  if (Organizer) return res.status(400).send("Organizer already existed");
  req.isValidated = true;
  next();
};
