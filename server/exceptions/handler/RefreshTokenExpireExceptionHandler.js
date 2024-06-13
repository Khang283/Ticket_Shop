const { RefreshTokenExpireException } = require("../exceptions/refresh_token_expire_exception")

const RefreshTokenExpireExceptionHandler = (err, req, res, next) => {
    if(err instanceof RefreshTokenExpireException){
        console.log.apply(err.message);
        const msg = err.message || "Refresh Token Error";
        const errStatus = err.status || 400;
        return res.status(errStatus).json({
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

module.exports = RefreshTokenExpireExceptionHandler;