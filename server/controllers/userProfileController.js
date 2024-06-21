const { User } = require('../db/models');

class userProfileController {
  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await User.findByPk(id);
      if (!customer) {
        return res.status(404).json({ error: "Cannot find" });
      }

      return res.status(201).json(customer);
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new userProfileController();