const { v4: uuidv4 } = require('uuid');
const { Ticket, TicketType } = require('../db/models');

class TicketController {
    
    getTickets = async (req, res) => {
        try {
            const tickets = await Ticket.findAll({
                include: {
                    model: TicketType,
                    as: 'ticketType',
                    attributes: ['id', 'name']
                }
            });
            return res.status(200).json(tickets);
        } catch (error) {
            console.log('Lỗi lấy dữ liệu! ', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    addTicket = async (req, res) => {
        const { name, ticketTypeId } = req.body;
        try {
            const newTicket = await Ticket.create({
                id: uuidv4(),
                name,
                ticketTypeId,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            return res.status(201).json(newTicket);
        } catch (error) {
            console.log('Lỗi thêm dữ liệu! ', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    updateTicket = async (req, res) => {
        const { id } = req.params;
        const { name, ticketTypeId } = req.body;
        try {
            const ticket = await Ticket.findByPk(id);
            if (!ticket) {
                return res.status(404).json({ error: 'Không tìm thấy vé' });
            }

            ticket.name = name;
            ticket.ticketTypeId = ticketTypeId;
            await ticket.save();

            return res.status(200).json(ticket);
        } catch (error) {
            console.log('Lỗi cập nhật vé! ', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    deleteTicket = async (req, res) => {
        const { id } = req.params;
        try {
            const ticket = await Ticket.findByPk(id);
            if (!ticket) {
                return res.status(404).json({ error: 'Không tìm thấy vé' });
            }

            await ticket.destroy();
            return res.status(200).json({ message: 'Vé đã được xóa thành công' });
        } catch (error) {
            console.log('Lỗi xóa vé! ', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new TicketController();
