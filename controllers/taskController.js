const Task = require("../models/Task.js");



const getAllTasks = async (req, res) => {
     try{
          tasks = await Task.find({});
          const filteredTasks = tasks.filter(task => task.postedBy === req.user._id); //req.user is from auth middleware
          res.json(filteredTasks);
     }catch{
          res.status(500).json();
     }
}


const addTask = async (req, res) => {
     const task = new Task({
          description: req.body.description,
          postedBy: req.user._id //req.user is from auth middleware
     });

     try{
          const newTask = await task.save();
          res.status(201).json({
               message: "Successfully added new task",
               task: task
          });

     }catch(err){
          res.json({message: err.message});
     }

     
}

const updateTask = async (req, res) => {
     try{
          const task = await Task.findOne({"_id": req.params.id});  
          task.description = req.body.description

          const updatedTask = await task.save();

          res.status(200).json('Successfully Updated Task');

     }catch(err){
          res.status(409).json(err.message);
     }
     
}

const completeTask = async (req, res) => {
     try{
          const task = await Task.findOne({"_id": req.params.id}); 

          task.completed = !task.completed

          const updatedTask = await task.save();

          res.status(200).json('Successfully Updated Task');

     }catch(err){
          res.json(err.message);
     }
     
}

const deleteTask = async (req, res) => {
     try{
          const task = await Task.findOne({_id: req.params.id});

          await task.deleteOne();

          res.status(200).json('Successfully Deleted Task');

     }catch{

          res.status(500).json();
     }
     
}

module.exports = {
     getAllTasks,
     addTask,
     updateTask,
     deleteTask,
     completeTask
}