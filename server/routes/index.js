const express = require('express');
const app = express();
const common_route = require('./common_route');
const userRoutes = require('./user_route');
const dashboard_route = require('./dashboard_route');


app.use('/', dashboard_route)

app.use('/', userRoutes);

module.exports = app;