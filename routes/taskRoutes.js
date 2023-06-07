const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');
const auth = require("../middlewares/auth.js");

const { userAuth } = auth;

const {
getAllTasks,
addTask,
updateTask,
deleteTask,
completeTask

} = taskController;


// Retrieve All Tasks
router.get('/', userAuth, getAllTasks);

// Create New Task
router.post('/', userAuth, addTask);

// Update Task
router.patch('/:id', updateTask);

// Complete Task
router.patch('/:id/complete', completeTask)

// Delete Task
router.delete('/:id', deleteTask);

module.exports = router;