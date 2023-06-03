const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: [true, "Username is required"]
     },

     password: {
          type: String,
          required: [true, "Password is required"]
     },

     dateRegistered: {
          type: Date,
          default: Date.now
     }

});

module.exports = mongoose.model("User", userSchema);