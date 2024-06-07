'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        username: 'Vu1234',
        password: 'matkhau123',
        fullname: 'Nguyễn Đình Vũ',
        dob: new Date('1990-01-01'),
        email: 'Vu123@example.com',
        gender: 'male',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'nahn123',
        password: 'matkhau123',
        fullname: 'Lê Đình Nhân',
        dob: new Date('1990-01-01'),
        email: 'nahn123@example.com',
        gender: 'male',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'tuan123',
        password: 'matkhau123',
        fullname: 'Trần Văn Tuấn',
        dob: new Date('1990-01-01'),
        email: 'tuan123@example.com',
        gender: 'male',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'thi123',
        password: 'matkhau123',
        fullname: 'Đinh Thị Kim Thy',
        dob: new Date('1990-01-01'),
        email: 'thi123@example.com',
        gender: 'female',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'kieu123',
        password: 'matkhau123',
        fullname: 'Trương Thị Hồng Kiều',
        dob: new Date('1990-01-01'),
        email: 'kieu123@example.com',
        gender: 'female',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'admin123',
        password: 'admin123',
        fullname: 'Admin',
        dob: new Date('1990-01-01'),
        email: 'admin@example.com',
        gender: 'male',
        role: 'admin',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'phuong12',
        password: 'matkhau123',
        fullname: 'Lê Minh Phương',
        dob: new Date('1990-01-01'),
        email: 'phuong12@example.com',
        gender: 'male',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'hong123',
        password: 'matkhau123',
        fullname: 'Lưu Thị Hồng',
        dob: new Date('1990-01-01'),
        email: 'hong123@example.com',
        gender: 'female',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'huy123',
        password: 'matkhau123',
        fullname: 'Lê Quang Huy',
        dob: new Date('1990-01-01'),
        email: 'huy123@example.com',
        gender: 'male',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'nam112',
        password: 'matkhau123',
        fullname: 'Lê Đình Nam',
        dob: new Date('1990-01-01'),
        email: 'nam112@example.com',
        gender: 'male',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
