const { User } = require('../db/models');

const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
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
  getUserProfile,
};
