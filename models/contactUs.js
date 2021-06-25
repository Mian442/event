const mongoose = require("mongoose");
const Joi = require("joi");

const ContactUsSchema = new mongoose.Schema({
  name: String,
  subject: String,
  email: String,
  message: String,
});

ContactUsSchema.statics.getAllContactUs = async function () {
  const ContactUs = await ContactUsModel.find();
  return ContactUs;
};

ContactUsSchema.statics.getContactUsById = async function (id) {
  const ContactUs = await ContactUsModel.findById(id);
  return ContactUs;
};

ContactUsSchema.methods.addContactUs = async function (data) {
  ContactUs = new ContactUsModel({
    ...data,
  });

  ContactUs = await ContactUs.save();
  return ContactUs;
};

//Validation Functions Sign up ContactUs info
ContactUsSchema.statics.validate = async function (RequestedBody) {
  //  Validating
  return validateContactUs(RequestedBody);
};
//Function
function validateContactUs(ContactUs) {
  // Designing JOI Validation schema
  const schema = Joi.object({
    name: Joi.string().required(),
    subject: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
  });

  return schema.validate(ContactUs, { abortEarly: false });
}

ContactUsSchema.set("toJSON", { virtuals: true });
const ContactUsModel = mongoose.model("contactUs", ContactUsSchema);
module.exports = ContactUsModel;
