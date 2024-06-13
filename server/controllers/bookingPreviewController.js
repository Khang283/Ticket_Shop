const { TicketType } = require('../models');

const getTicketTypes = async (req, res) => {
  try {
    const ticketTypes = await TicketType.findAll();
    res.status(200).json(ticketTypes);
  } catch (error) {
    console.error('Error fetching ticket types:', error);
    res.status(500).json({ error: 'An error occurred while fetching ticket types.' });
  }
};

module.exports = {
  getTicketTypes,
};
