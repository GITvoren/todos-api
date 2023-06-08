// dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
port = process.env.PORT || 8080;

// parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cors
app.use(cors({
     origin: "*"
    /*  methods: ["GET", "POST"] 
     credentials: true */
}))

// main routes
const userRoutes = require('./routes/userRoutes.js');
app.use('/users', userRoutes);

const taskRoutes = require('./routes/taskRoutes.js');
app.use('/tasks', taskRoutes);


// cyclic.sh(WebHostingServer) FORMAT: -> Connect to DB before listening to PORT

// mongoDB connection

const connectDB = async () => {
     try{
          const conn = await mongoose.connect(process.env.MONGODB_URL);
          console.log(`MongoDB Connected: ${conn.connection.host}`)

     }catch(err){
          console.log(err);
          process.exit(1);
     }
}


// server listen

connectDB()
.then(() => app.listen(port, () => console.log('Connected to port: '+port)))