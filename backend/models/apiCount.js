const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countSchema = new Schema(
  {
    addAPICounter: {
      type: Number,
    },
    updateAPICounter: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Counter", countSchema);
