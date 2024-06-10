const express = require('express');
const app = express();
const common_route = require('./common_route');
const dashboard_route = require('./dashboard_route');
const auth_route = require('./authentication_route');


app.use('/', dashboard_route)

app.use('/', common_route);

app.use('/auth', auth_route)

module.exports = app;