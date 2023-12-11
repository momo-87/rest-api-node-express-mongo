import mongoose from "mongoose";

const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geo location
});

// create model
const User = mongoose.model("user", UserSchema);