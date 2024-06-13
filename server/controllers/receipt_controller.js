const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Receipt, User, ReceiptDetail } = require('../db/models');

class ReceiptController {
    getReceipt = async (req, res) => {
        try{
            const receipts = await Receipt.findAll({
                include: [{
                    model: User,
                    as: 'user',
                    attributes: ['id', 'full_name']
                  }, {
                    model: ReceiptDetail,
                    as: 'receiptDetails',
                    attributes: ['id', 'ticketTypeId', 'total', 'amount']
                  }]
            });
            return res.json(receipts);
        } catch(error) {
            console.error("Lỗi lấy dữ liệu hóa đơn!", error);
            return res.status(500).json({error: 'Internal Server Error!'});
        }   
    }
}

module.exports = new ReceiptController;