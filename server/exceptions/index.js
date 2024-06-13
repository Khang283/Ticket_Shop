const express = require('express');
const UnknownExceptionHandler = require('./handler/UnknownExceptionHandler');
const app = express();

function ErrorHandling(app){
    //Add other error handling here on top of the generic one

    app.use(UnknownExceptionHandler);
}

module.exports = ErrorHandling;