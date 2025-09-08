const express = require('express');
const router = express.Router();


const { submitForm } = require('../../controllers/formControllers');

// Route for handling contact form submission
router.post('/contact', submitForm);

module.exports = router;
