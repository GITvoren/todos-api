const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const middlewares = require('../middlewares/middlewares.js');
const auth = require('../middlewares/auth.js')

// const { findUser } = middlewares;

const {userAuth} = auth

const {
     getUser,
     registerUser,
     loginUser
} = userController;

// Get User Details using Encoded jwt Token
router.get('/details', userAuth, getUser);

// User Registration
router.post('/register', registerUser);


// User Login Authentication
router.post('/login', loginUser)


module.exports = router;