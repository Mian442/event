const mongoose = require("mongoose");
const Joi = require("joi");

const EventSchema = new mongoose.Schema({
  event_name: String,
  event_desc: String,
  date: Date,
  start_time: String,
  end_time: String,
  last_time: Date,
  pic: String,
});

EventSchema.statics.getAllEvent = async function () {
  const Event = await EventModel.find();
  return Event;
};

EventSchema.statics.getEventById = async function (id) {
  const Event = await EventModel.findById(id);
  return Event;
};

EventSchema.methods.addEvent = async function (data) {
  Event = new EventModel({
    ...data,
  });

  Event = await Event.save();
  return Event;
};

//Validation Functions Sign up Event info
EventSchema.statics.validate = async function (RequestedBody) {
  //  Validating
  return validateEvent(RequestedBody);
};
//Function
function validateEvent(Event) {
  // Designing JOI Validation schema
  const schema = Joi.object({
    event_name: Joi.string().required(),
    event_desc: Joi.string().required(),
    pic: Joi.string().required(),
    date: Joi.date().required(),
    start_time: Joi.string().required(),
    end_time: Joi.string().required(),
    last_time: Joi.date().required(),
  });

  return schema.validate(Event, { abortEarly: false });
}

EventSchema.set("toJSON", { virtuals: true });
const EventModel = mongoose.model("event", EventSchema);
module.exports = EventModel;
