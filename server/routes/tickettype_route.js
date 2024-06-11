const express = require('express');
const router = express.Router();
const TicketTypeController = require('../controllers/tickettype_controller');

router.get('/ticketTypes', TicketTypeController.getTicketType);

module.exports = router;