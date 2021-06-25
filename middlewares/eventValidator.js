const EventModel = require("../models/events");
module.exports = async function (req, res, next) {
  const { error } = await EventModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  req.isValidated = true;
  next();
};
