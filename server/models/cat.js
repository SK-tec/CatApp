const { default: mongoose } = require("mongoose");

const catSchema = new mongoose.Schema(
  {
    breed: { type: String, required: [true, "Cat Bread is required"] },
    origin: { type: String, required: [true, "Cat Origin is required"] },
    url: { type: String, required: [true, "Cat Image URL is required"] },
    description: { type: String },
    temperament: { type: String },
    life_spanMax: { type: Number, default: 0 },
    life_spanMin: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const model = mongoose.model("Cat", catSchema);
module.exports = model;
