const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuitSchema = new Schema({
  facility: String,
  capacity: Number,
  details: {
    description: String,
    area: Number,
    pictures: [
      {
        url: String,
        description: String,
      },
    ],
  },
  view3d: {
    src: String,
  },
  rentPrices: [
    {
      beginDate: Date,
      endDate: Date,
      price: Number,
      totalAvailable: Number,
    },
  ],
  reservations: [String],
});

const model = mongoose.model("Suit", SuitSchema, "suites");

module.exports = model;
