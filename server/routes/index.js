const express = require('express');
const app = express();
const common_route = require('./common_route');

app.use('/', common_route);

module.exports = app;