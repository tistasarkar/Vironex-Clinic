const express = require('express')
const router = express.Router();
const { registerUser, loginUser } = require('../../controllers/userControllers');

// Define routes and link them to controller functions
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;