const express = require('express');
const app = express();
const user_route = require('./user_route');
const dashboard_route = require('./dashboard_route');

app.use('/', dashboard_route);

app.use('/', user_route);

module.exports = app;