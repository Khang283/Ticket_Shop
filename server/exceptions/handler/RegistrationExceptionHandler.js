const { RegistrationException } = require("../exceptions/registration_exception");

const RegistrationExceptionHandler = (err, req, res, next) => {
    if(err instanceof RegistrationException){
        console.log.apply(err.message);
        const msg = err.message || "Registration Error";
        const errStatus = err.status || 500;
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

module.exports = RegistrationExceptionHandler;