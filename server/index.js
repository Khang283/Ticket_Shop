const express = require('express');
const app = express();
const routes = require('./routes/index');
const morgan = require('morgan');
require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT;
const db = require('./db/index');
app.use(morgan(process.env.LOGGING_FORMAT));
app.use(routes);

let server = app.listen(PORT | 3000, ()=>{
    console.log(`Server listen on port ${server.address().port}`)
})