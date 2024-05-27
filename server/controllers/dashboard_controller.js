const express = require('express');
const { Op, Sequelize, where } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const db = require('../db/models');
// const sequelize = require('./models/index');

class DashboardController {
    getMonthlyRevenue = async (req, res) =>{
        try {
            const results = await db.Receipt.findAll({
              attributes: [
                [sequelize.fn('MONTH', sequelize.col('date')), 'month'],
                [sequelize.fn('YEAR', sequelize.col('date')), 'year'],
                [sequelize.fn('SUM', sequelize.col('total')), 'total_revenue'],
              ],
              group: ['year', 'month'],
              order: [
                ['year', 'DESC'],
                ['month', 'DESC']
              ]
            });
        
            return res.json(results.map(result => result.toJSON()));
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }

    getTotalRevenue = async (req, res) =>{
        try {
            const results = await db.Receipt.findAll({
              attributes: [
                [sequelize.fn('SUM', sequelize.col('total')), 'total_revenue'],
              ],
            });
        
            return res.json(results[0].toJSON());
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }

    getTotalTicket = async (req, res) =>{
        try {
            const results = await db.ReceiptDetail.findAll({
              attributes: [
                [sequelize.fn('SUM', sequelize.col('total')), 'total_ticket'],
              ],
            });
        
            return res.json(results[0].toJSON());
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }

    getTotalClient = async (req, res) =>{
        try {
            const client_count = await db.User.count({
                where:{
                    role: 'user'
                }
            });
        
            return res.json({client_count});
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }
}

module.exports = new DashboardController();