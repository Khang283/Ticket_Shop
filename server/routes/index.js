const express = require('express');
const app = express();
const user_route = require('./user_route');
const dashboard_route = require('./dashboard_route');
const auth_route = require('./authentication_route');
const tickettype_route = require('./tickettype_route');
const booking_route = require('./booking_route');
const ticket_route = require('./ticket_route');
const receipt_router = require('./receipt_route');
const bookingPreviewRoutes = require('./bookingPreviewRoute');
const userProfileRoute = require('./userProfileRoute');

app.use('/', dashboard_route);
app.use('/', user_route);
app.use('/', tickettype_route);
app.use('/', booking_route);
app.use('/', ticket_route);
app.use('/', receipt_router);
app.use('/', bookingPreviewRoutes);
app.use('/', userProfileRoute); 

app.use('/auth', auth_route);

module.exports = app;
