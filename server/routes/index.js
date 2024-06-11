const express = require('express');
const app = express();
const user_route = require('./user_route');
const dashboard_route = require('./dashboard_route');
const tickettype_route = require('./tickettype_route');
const booking_route = require('./booking_route');

app.use('/', dashboard_route);

app.use('/', user_route);

app.use('/', tickettype_route);

app.use('/', booking_route);



module.exports = app;