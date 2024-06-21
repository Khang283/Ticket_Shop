const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

router.get('/profile/:id', userProfileController.getUserById);

module.exports = router;
