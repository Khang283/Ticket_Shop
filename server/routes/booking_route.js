const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/booking_controller');

router.post('/receipts', BookingController.addNewReceipt);


module.exports = router;