const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    user: {
      type: String,
      require: true
    },
    bio: String,
    avatar: {
      type: String,
      require: true
    }
  },
  {
    //createdAt, updatedAt
    timestamps: true
  }
);

module.exports = model("Dev", DevSchema);
