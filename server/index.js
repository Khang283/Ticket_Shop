const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/index');
const morgan = require('morgan');
const errorHandling = require('./exceptions/index');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const db = require('./db/index');
const bodyParser = require('body-parser');

app.use(cors());
app.use(morgan(process.env.LOGGING_FORMAT || 'dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/v1', routes);

// Error handling, must be put at the end of middleware pipe
errorHandling(app);

let server = app.listen(PORT, () => {
    console.log(`Server listening on port ${server.address().port}`);
});
