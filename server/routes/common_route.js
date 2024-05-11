const express = require('express');
const router = express.Router();
const CommonController = require('../controllers/common_controller');

router.get('/', CommonController.test);

module.exports = router;