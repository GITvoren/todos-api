const Task = require("../models/Task.js");


const getAllTasks = async (req, res) => {
     try{
          tasks = await Task.find({});
          res.json(tasks);
     }catch{
          res.status(500).send();
     }
}


const addTask = async (req, res) => {
     const task = new Task({
          description: req.body.description
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

          res.status(200).send('Successfully Updated Task');

     }catch(err){
          res.json(err.message);
     }
     
}

const deleteTask = async (req, res) => {
     try{
          const task = await Task.findOne({'_id': req.params.id});

          await task.deleteOne();

          res.status(200).send('Successfully Deleted Task');

     }catch{

          res.status(500).send();
     }
     
}

module.exports = {
     getAllTasks,
     addTask,
     updateTask,
     deleteTask
}