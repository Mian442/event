const ManagerModel = require("../models/manager");
module.exports = async function (req, res, next) {
  const manager = await ManagerModel.findOne({ email: req.body.email });
  if (manager) return res.status(400).send("Manager already existed");
  req.isValidated = true;
  next();
};
