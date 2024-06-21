'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userPassword = await bcrypt.hash('matkhau123', 10);
    const adminPassword = await bcrypt.hash('admin123', 10);
    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        username: 'Vu1234',
        password: userPassword,
        full_name: 'Nguyễn Đình Vũ',
        dob: new Date('1990-01-01'),
        email: 'Vu123@example.com',
        gender: 'male',
        address: '123 Kha Vạn Cân, Linh Tây, Thủ Đức, Tp.HCM',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'nahn123',
        password: userPassword,
        full_name: 'Lê Đình Nhân',
        dob: new Date('1990-01-01'),
        email: 'nahn123@example.com',
        gender: 'male',
        address: '123 Huỳnh Tấn Phát, Bình Thạnh, Tp.HCM',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'tuan123',
        password: userPassword,
        full_name: 'Trần Văn Tuấn',
        dob: new Date('1990-01-01'),
        email: 'tuan123@example.com',
        gender: 'male',
        address: '68, Tân Hương, Tân Phú, Tp.HCM',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'thi123',
        password: userPassword,
        full_name: 'Đinh Thị Kim Thy',
        dob: new Date('1990-01-01'),
        email: 'thi123@example.com',
        gender: 'female',
        address: 'Khu phố 6, Linh Trung, Thủ Đức, Tp.HCM',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'kieu123',
        password: userPassword,
        full_name: 'Trương Thị Hồng Kiều',
        dob: new Date('1990-01-01'),
        email: 'kieu123@example.com',
        gender: 'female',
        address: '123 Kha Vạn Cân, Linh Tây, Thủ Đức, Tp.HCM',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'admin123',
        password: adminPassword,
        full_name: 'Admin',
        dob: new Date('1990-01-01'),
        email: 'admin@example.com',
        gender: 'male',
        address: '333 Kha Vạn Cân, Linh Tây, Thủ Đức, Tp.HCM',
        role: 'admin',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'phuong12',
        password: userPassword,
        full_name: 'Lê Minh Phương',
        dob: new Date('1990-01-01'),
        email: 'phuong12@example.com',
        gender: 'male',
        address: '98 Tân Lập, Đông Hòa, Dĩ An, Bình Dương',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'hong123',
        password: userPassword,
        full_name: 'Lưu Thị Hồng',
        dob: new Date('1990-01-01'),
        email: 'hong123@example.com',
        gender: 'female',
        address: '45 Lê Lợi, Bến Nghé, Quận 1, Tp.HCM',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'huy123',
        password: userPassword,
        full_name: 'Lê Quang Huy',
        dob: new Date('1990-01-01'),
        email: 'huy123@example.com',
        gender: 'male',
        address: '23 Nguyễn Huệ, Quận 3, Tp.HCM',
        role: 'user',
        phone_number: '0123456789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'nam112',
        password: userPassword,
        full_name: 'Lê Đình Nam',
        dob: new Date('1990-01-01'),
        email: 'nam112@example.com',
        gender: 'male',
        address: '12 Trần Não, Thủ Đức, Tp.HCM',
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
