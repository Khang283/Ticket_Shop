// routes/bookingPreviewRoutes.js
const express = require('express');
const router = express.Router();
const { getBookingPreview } = require('../controllers/bookingPreviewController');

// Define the route to get booking preview
router.get('/api/booking-preview', getBookingPreview);

module.exports = router;
