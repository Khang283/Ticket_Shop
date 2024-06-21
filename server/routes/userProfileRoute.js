const express = require('express');
const router = express.Router();
const { verifyToken, getUserProfile } = require('../controllers/userProfileController');

router.get('/user/profile', verifyToken, getUserProfile);

module.exports = router;
