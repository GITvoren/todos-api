const User = require('../models/User.js');
const bcrypt = require('bcrypt');




const getUsers = async (req, res) => {
     try{
          const users = await User.find({});
          res.json(users);

     } catch(err){
          res.status(500).json({message: err.message});
     }
     
}

const registerUser = async (req, res) => {
     const user = await User.findOne({'username': req.body.username});
     if(user !== null){
          res.status(409).send("Username already exists");
          return;
     }

     try{
          const user = new User({
               username: req.body.username,
               password: await bcrypt.hash(req.body.password, 10)       
          });

          const newUser = await user.save();
          res.status(201).send("Successfully Registered User");

     }catch(err){
          res.status(500).json({message: err.message});
     }
    
}

const loginUser = async (req, res) => {
     const user = await User.findOne({'username': req.body.username});
     if(user == null){
          res.status(400).send("User Not Found");
          return;
     }

     try{
          const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
          if(isPasswordMatch){
               res.json({
                    message: "Generate JWT Access Token",
                    user: user
               })

          } else{
               res.send('Not Allowed')
          }
          

     }catch(err){
          res.status(500).json({message: err.message})
     }

}


module.exports = {
     getUsers,
     registerUser,
     loginUser
};