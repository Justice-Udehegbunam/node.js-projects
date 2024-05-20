const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Number must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(), // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported", // this helps u to be able to access the value that the user put just incase if u are handling it on the frontend.
    },
    /* This is the basic method to set guardrails for the type of data that is needed in the data type similar to a select Input 
      enum: ["ikea", "liddy", "caressa", "macros"],
    */
  },
});

module.exports = mongoose.model("Product", productSchema);
