require('dotenv').config();
const express = require('express');
const app = express();
port = process.env.PORT || 8080;

app.listen(port, () => {console.log('Connected to port: '+port)});