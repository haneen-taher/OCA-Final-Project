const mongoose = require("mongoose");

const specialistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialisation: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact_no: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
});

const Specialist = mongoose.model("Specialist", specialistSchema);

module.exports = Specialist;
