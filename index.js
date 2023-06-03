// dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
port = process.env.PORT || 8080;

// parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// main routes
const userRoutes = require('./routes/userRoutes.js');
app.use('/users', userRoutes);

const taskRoutes = require('./routes/taskRoutes.js');
app.use('/tasks', taskRoutes);

// mongoDb connection
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected to MongoDB Database'));



// server listen
app.listen(port, () => {console.log('Connected to port: '+port)});