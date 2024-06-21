const express = require('express');
const router = express.Router();
const UserProfileController = require('../controllers/userProfileController');
const AuthenticationController = require('../controllers/authentication_controller');

router.use(AuthenticationController.verifyToken);
// Route để lấy thông tin người dùng
router.get('/profile', UserProfileController.getUserProfile);

module.exports = router;
