import mongoose from "mongoose";

const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    // array of numbers
    type: [Number],
    index: "2dsphere" // 2dsphere index for geolocation is more accurate because it consider the 3D apect of the earth
  }
});




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
  },
  // add in geo location information
  geometry: GeoSchema
});

// create model
const User = mongoose.model("user", UserSchema);

// export model
export default User;