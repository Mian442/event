const mongoose = require("mongoose");
const Joi = require("joi");

const ManagerSchema = new mongoose.Schema({
  society_name: String,
  head_desc: String,
  email: String,
  password: String,
});

ManagerSchema.statics.getAllManager = async function () {
  const Manager = await ManagerModel.find();
  return Manager;
};

ManagerSchema.statics.getManagerById = async function (id) {
  const Manager = await ManagerModel.findById(id);
  return Manager;
};

ManagerSchema.methods.addManager = async function (data) {
  Manager = new ManagerModel({
    ...data,
  });

  Manager = await Manager.save();
  return Manager;
};

//Validation Functions Sign up Manager info
ManagerSchema.statics.validate = async function (RequestedBody) {
  //  Validating
  return validateManager(RequestedBody);
};
//Function
function validateManager(Manager) {
  // Designing JOI Validation schema
  const schema = Joi.object({
    society_name: Joi.string().required(),
    head_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(Manager, { abortEarly: false });
}

ManagerSchema.set("toJSON", { virtuals: true });
const ManagerModel = mongoose.model("manager", ManagerSchema);
module.exports = ManagerModel;
