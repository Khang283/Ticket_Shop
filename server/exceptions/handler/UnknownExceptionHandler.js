const { UnknownException } = require("../exceptions/unknown_exception");

const UnknownExceptionHandler = (err, req, res, next)=>{
    if(err instanceof UnknownException){
        console.log.apply(err.message);
        const msg = err.message || "Internal Server Error";
        const errStatus = err.status || 500;
        return res.status(500).json({
            message: msg,
            timestamp: Date.now(),
            status: errStatus,
            path: req.originalUrl
        })
    }
    else{
        res.status(500).send('Not Unknown Error');
    }
}
module.exports = UnknownExceptionHandler;