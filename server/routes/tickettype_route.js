const express = require('express');
const router = express.Router();
const TicketTypeController = require('../controllers/tickettype_controller');

router.get('/ticketTypes', TicketTypeController.getTicketType);
router.post('/ticketTypes', TicketTypeController.addTicketType);
router.put('/ticketTypes/:id', TicketTypeController.updateTicketType);
router.delete('/ticketTypes/:id', TicketTypeController.deleteTicketType);

module.exports = router;