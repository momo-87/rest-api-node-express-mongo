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

// create agent Schema
const AgentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone field is required"]
  },
  email: {
    type: String,
    required: [true, "Email field is required"]
  },
  image: {
    type: String,
    default: "None"
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});


// create house Schema
const HouseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is required"]
  },
  description: {
    type: String,
    required: [true, "Description field is required"]
  },
  type: {
    type: String,
    required: [true, "Type field is required"]
  },
  price: {
    type: Number,
    required: [true, "Price field is required"]
  },
  location: {
    type: String,
    required: [true, "Location field is required"]
  },
  bedrooms: {
    type: Number,
    required: [true, "bedrooms field is required"]
  },
  bathrooms: {
    type: Number,
    required: [true, "Bathrooms field is required"]
  },
  area: {
    type: Number,
    required: [true, "Area field is required"]
  },
  yearBuild: {
    type: Date,
  },
  status: {
    type: String,
    default: "For rent",
  },
  features: {
    type: String,
    default: "None",
  },
  images: {
    type: String,
    default: "None",
  },
  virtualTour: {
    type: String,
    default: "None",
  },
  available: {
    type: Boolean,
    default: false
  },
  additionalNote: {
    type: String,
    default: "None"
  },
  dateListed: {
    type: Date,
    default: Date.now
  },
  dateUpdated: {
    type: Date,
    default: Date.now
  },

  // add in agent information
  agent: AgentSchema,

  // add in geo location information
  geometry: GeoSchema
});

// create model
const House = mongoose.model("house", HouseSchema);

// export model
export default House;