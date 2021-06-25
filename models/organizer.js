const mongoose = require("mongoose");
const Joi = require("joi");

const OrganizerSchema = new mongoose.Schema({
  society_name: String,
  head_desc: String,
  email: String,
  password: String,
});

OrganizerSchema.statics.getAllOrganizer = async function () {
  const Organizer = await OrganizerModel.find();
  return Organizer;
};

OrganizerSchema.statics.getOrganizerById = async function (id) {
  const Organizer = await OrganizerModel.findById(id);
  return Organizer;
};

OrganizerSchema.methods.addOrganizer = async function (data) {
  Organizer = new OrganizerModel({
    ...data,
  });

  Organizer = await Organizer.save();
  return Organizer;
};

//Validation Functions Sign up Organizer info
OrganizerSchema.statics.validate = async function (RequestedBody) {
  //  Validating
  return validateOrganizer(RequestedBody);
};
//Function
function validateOrganizer(Organizer) {
  // Designing JOI Validation schema
  const schema = Joi.object({
    society_name: Joi.string().required(),
    head_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(Organizer, { abortEarly: false });
}

OrganizerSchema.set("toJSON", { virtuals: true });
const OrganizerModel = mongoose.model("organizer", OrganizerSchema);
module.exports = OrganizerModel;
