// controllers/bookingPreviewController.js
const { TicketType } = require('../db/models');

const getBookingPreview = async (req, res) => {
  try {
    const ticketTypes = await TicketType.findAll();
    res.status(200).json(ticketTypes);
  } catch (error) {
    console.error('Error fetching booking preview:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getBookingPreview,
};
