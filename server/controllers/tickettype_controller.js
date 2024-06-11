const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { TicketType } = require('../db/models');
const { v4: uuidv4 } = require('uuid');

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
}

module.exports = new TicketTypeController;