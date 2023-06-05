const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');
const auth = require("../middlewares/auth.js");

const { userAuth } = auth;

const {
getAllTasks,
addTask,
updateTask,
deleteTask

} = taskController;


// Retrieve All Tasks
router.get('/', userAuth, getAllTasks);

// Create New Task
router.post('/', userAuth, addTask);

// Update Task
router.put('/:id', updateTask);

// Delete Task
router.delete('/:id', deleteTask);

module.exports = router;