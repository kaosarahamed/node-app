const mongoose = require("mongoose");

const crudUserScema = mongoose.Schema(
  {
    username: {
      type: String,
      requireed: true,
      unique: true,
    },
    email: {
      type: String,
      requireed: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("crudUserScema", crudUserScema);
