const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');

const {
getAllTasks,
addTask,
updateTask,
deleteTask

} = taskController;


// Retrieve All Tasks
router.get('/', getAllTasks);

// Create New Task
router.post('/', addTask);

// Update Task
router.put('/:id', updateTask);

// Delete Task
router.delete('/:id', deleteTask);

module.exports = router;