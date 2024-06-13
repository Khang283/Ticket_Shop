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
            console.error('Lỗi thêm người dùng: ', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }

    updateUser = async (req, res) => {
      try {
        const {id, username, email, fullName, gender, address, phoneNumber} = req.body;
        const user = await User.findByPk(id);
        if(!user) {
          return res.status(404).json({error: 'Không tìm thấy người dùng!'});
        }
        user.username = username;
        user.email = email;
        user.fullName = fullName;
        user.gender = gender;
        user.address = address;
        user.phoneNumber = phoneNumber;

        await user.save();
        return res.status(200).json(user);
      } catch (error) {
        console.error('Lỗi cập nhật người dùng! ', error);
        return res.status(500).json({ error: 'Internal Server Error'});
      }
    }

    deleteUser = async (req, res) => {
      try {
        const {id} = req.params;
        const user = await User.findByPk(id);
        if(!user) {
          return res.status(404).json({error: 'Không tìm thấy người dùng!'});
        }

        await user.destroy();
        return res.status(204).json({message: 'Người dùng này đã được xóa thành công!'});
      } catch (error) {
        console.log('Lỗi xóa người dùng! ', error);
        return res.status(500).json({ error: 'Internal Server Error'});
      }
    }
}

module.exports = new UserController();