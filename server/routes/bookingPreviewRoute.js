const express = require('express');
const router = express.Router();
const { getTicketTypes } = require('../controllers/bookingPreviewController');

router.get('/ticket-types', getTicketTypes);

module.exports = router;
