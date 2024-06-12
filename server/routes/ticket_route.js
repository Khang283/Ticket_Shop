const express = require('express');
const TicketController = require('../controllers/ticket_controller');
const router = express.Router();

router.get('/tickets', TicketController.getTickets);
router.post('/tickets', TicketController.addTicket);
router.put('/tickets/:id', TicketController.updateTicket);
router.delete('/tickets/:id', TicketController.deleteTicket);

module.exports = router;
