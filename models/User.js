const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);