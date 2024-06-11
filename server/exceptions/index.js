const express = require('express');
const UnknownExceptionHandler = require('./handler/UnknownExceptionHandler');
const JwtExceptionHandler = require('./handler/JwtExceptionHanlder');
const RegistrationExceptionHandler = require('./handler/RegistrationExceptionHandler');
const UserExistExceptionHandler = require('./handler/UserExistExceptionHandler');
const RefreshTokenExpireExceptionHandler = require('./handler/RefreshTokenExpireExceptionHandler');
const app = express();

function ErrorHandling(app){
    //Add other error handling here on top of the generic one
    app.use(RefreshTokenExpireExceptionHandler)
    app.use(UserExistExceptionHandler)
    app.use(RegistrationExceptionHandler)
    app.use(JwtExceptionHandler)

    app.use(UnknownExceptionHandler);
}

module.exports = ErrorHandling;