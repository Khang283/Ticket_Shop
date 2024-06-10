'use strict';

const { v4 : uuidv4 } = require('uuid');
const User = require('../models/User');
const moment = require('moment/moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[
      {
        id: uuidv4(),
        username: "admin",
        password: "admin",
        full_name: "admin",
        email: "admin@email.com",
        phone_number: "12345456464",
        role: "admin",
        created_at: moment().format(),
        updated_at: moment().format()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
