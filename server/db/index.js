const { Sequelize, Model } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        port: process.env.DATABASE_PORT
    }
)

db.authenticate()
    .then(() => console.log("Connected to database successfully"))
    .catch(error => console.log("Unable to connect to database: ", error));

module.exports = db;

