const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');

router.get('/users', UserController.getUser);
router.post('/users', UserController.addUser);

module.exports = router;