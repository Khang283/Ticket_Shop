const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/authentication_controller');

router.post('/register', AuthenticationController.register);
router.post('/login', AuthenticationController.login);
router.post('/refreshToken', AuthenticationController.refreshToken);
router.get('/testAuth', AuthenticationController.verifyToken, AuthenticationController.testAuth);
router.post('/logout', AuthenticationController.verifyToken, AuthenticationController.logout);

module.exports = router;