const express = require('express');
const app = express();
const common_route = require('./common_route');
const userRoutes = require('./user_route');
const receiptRoutes = require('./receipt_route')
app.use('/', userRoutes);
app.use('/receipt', receiptRoutes);
module.exports = app;