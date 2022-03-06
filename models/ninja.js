const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

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
  geometry: GeoSchema,
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
