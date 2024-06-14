const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

router.get('/user/:id', userProfileController.getUserProfile);

module.exports = router;
