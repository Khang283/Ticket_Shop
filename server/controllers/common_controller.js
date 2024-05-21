const { UnknownException } = require("../exceptions/exceptions/unknown_exception");
const { Sequelize } = require('sequelize');
const db = require('../db/index');
const userModel = require('../db/models/User');
const User = userModel(db, Sequelize.DataTypes);
class CommonController {
    test = async (req, res, next) => {
        const user = await User.findOne({
            where: {
                id: 1
            }
        })
        if (user == null) {
            next(new UnknownException());
        }
        else {
            res.status(200);
        }

    }
}

module.exports = new CommonController();