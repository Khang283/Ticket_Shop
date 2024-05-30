const { UnknownException } = require("../exceptions/exceptions/unknown_exception");
const { Sequelize } = require('sequelize');
const db = require('../db/models/index');
const Cart = require("../db/models/Cart");
// const userModel = require('../db/models/User');
// const Cart = require("../db/models/Cart")
// const User = userModel(db, Sequelize.DataTypes);
class CommonController {
    test = async (req, res, next) => {
        const user = await db.User.findAll({
            include: [
                {
                    model: db.Cart,
                    as: 'cart'
                }
            ]
        });
        console.log(user)
        res.json(user)
    }
}

module.exports = new CommonController();