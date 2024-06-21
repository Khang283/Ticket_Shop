const jwt = require('jsonwebtoken');
const { User } = require('../db/models');
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const tokenWithoutBearer = token.replace('Bearer ', '');

  jwt.verify(tokenWithoutBearer, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.userId = decoded.id;
    next();
  });
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from token by the middleware
    const user = await User.findByPk(userId, {
      attributes: ['fullName', 'gender', 'dob', 'address', 'email', 'phoneNumber']
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      name: user.fullName,
      gender: user.gender,
      dob: user.dob,
      address: user.address,
      email: user.email,
      phone: user.phoneNumber
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  verifyToken,
  getUserProfile,
};
