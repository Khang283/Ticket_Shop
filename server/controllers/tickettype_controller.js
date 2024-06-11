const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { TicketType } = require('../db/models');
const min = 3;
const max = 10000;

class TicketTypeController {
    
    getTicketType = async (req, res) => {
        try{
            const ticket_type = await TicketType.findAll();
            return res.status(200).json(ticket_type);
        } catch(error) {
            console.log('Lỗi lấy dữ liệu! ', error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    addTicketType = async (req , res) => {
        const { name, price, sale, description, amount } = req.body;
        try{
            const newTicketType = await TicketType.create({
                id: Math.floor(Math.random() * (max-min + 1)) + min,
                name,
                price,
                sale,
                description,
                amount,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            return res.status(201).json(newTicketType);
        } catch(error) {
            console.log('Lỗi thêm dữ liệu! ', error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    updateTicketType = async (req, res) => {
        const { id } = req.params;
        const { name, price, sales, description, amount } = req.body;
        try {
            const ticketType = await TicketType.findByPk(id);
            if (!ticketType) {
                return res.status(404).json({ error: 'Không tìm thấy loại vé' });
            }

            ticketType.name = name;
            ticketType.price = price;
            ticketType.sales = sales;
            ticketType.description = description;
            ticketType.amount = amount;

            await ticketType.save();

            return res.status(200).json(ticketType);
        } catch (error) {
            console.log('Lỗi cập nhật loại vé! ', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    deleteTicketType = async (req, res) => {
        const { id } = req.params;
        try {
            const ticketType = await TicketType.findByPk(id);
            if (!ticketType) {
                return res.status(404).json({ error: 'Không tìm thấy loại vé' });
            }

            await ticketType.destroy();
            return res.status(204).json({ message: 'Loại vé này đã được xóa thành công!' });
        } catch (error) {
            console.log("Lỗi khi xóa loại vé!", error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new TicketTypeController;