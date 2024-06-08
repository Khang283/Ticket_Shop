const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/user_controller');
const { User } = require('../db/models');

router.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  });


module.exports = router;