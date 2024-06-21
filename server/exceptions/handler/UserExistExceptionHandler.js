const { UserExistException } = require("../exceptions/user_exist_exception")

const UserExistExceptionHandler = (err, req, res, next) => {
    if(err instanceof UserExistException){
        console.log.apply(err.message);
        const msg = err.message || "User Exist Exception";
        const errStatus = err.status || 409;
        return res.status(500).json({
            message: msg,
            timestamp: Date.now(),
            status: errStatus,
            path: req.originalUrl
        })
    }
    else{
        next();
    }
}

module.exports = UserExistExceptionHandler;