const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const middlewares = require('../middlewares/middlewares.js');

// const { findUser } = middlewares;

const {
     getUsers,
     registerUser,
     loginUser
} = userController;


router.get('/', getUsers);

// User Registration
router.post('/register', registerUser);


// User Login Authentication
router.post('/login', loginUser)


module.exports = router;