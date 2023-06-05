const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
     description: {
          type: String,
          required: [true, "Description is required"]
     },
     postedBy: {
          type: String,
          required: true
     }
}, {timestamps: true})

module.exports = mongoose.model("Task", taskSchema);