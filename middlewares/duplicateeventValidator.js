const EventModel = require("../models/events");
module.exports = async function (req, res, next) {
  console.log(req.body);
  const Event = await EventModel.findOne({ event_name: req.body.event_name });
  console.log(Event);
  if (Event) return res.status(400).send("Event already existed");
  req.isValidated = true;
  next();
};
