const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
     description: {
          type: String,
          required: [true, "Description is required"]
     },
     datePosted: {
          type: Date,
          default: Date.now
     }
})

module.exports = mongoose.model("Task", taskSchema);