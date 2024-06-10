const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { User } = require('../db/models');
const { v4: uuidv4 } = require('uuid');
class UserController {
    getUser = async (req, res) => {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    addUser = async (req, res) => {
        try {
            const { username, email, fullName, gender, role, address, password, phoneNumber } = req.body;
            const newUser = await User.create({
              id: uuidv4(),
              username,
              email,
              fullName,
              gender,
              role,
              address,
              password,
              phoneNumber,
            });
            await newUser.save();
            return res.status(201).json(newUser);
          } catch (error) {
            console.error('Error adding user:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }
}

module.exports = new UserController();