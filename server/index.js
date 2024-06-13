const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/index');
const morgan = require('morgan');
const errorHandling = require('./exceptions/index');
require('dotenv').config();
const PORT = process.env.PORT;
const db = require('./db/index');
app.use(express.json());

const bodyParser = require('body-parser');


app.use(cors())

app.use(morgan(process.env.LOGGING_FORMAT));
app.use(express.json());
app.use('/api/v1', routes);

app.use(bodyParser.json());

//Error handling, must be put at the end of middlewares pipe
errorHandling(app);

let server = app.listen(PORT || 3000, () => {
    console.log(`Server listen on port ${server.address().port}`)
})