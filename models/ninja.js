const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is rquired"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  //ADD IN GEO LOCATION
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
