const { JwtException } = require("../exceptions/jwt_exception");
const { UnknownException } = require("../exceptions/unknown_exception");

const JwtExceptionHandler = (err, req, res, next)=>{
    if(err instanceof JwtException){
        console.log.apply(err.message);
        const msg = err.message || "JWT Error";
        const errStatus = err.status || 401;
        return res.status(401).json({
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
module.exports = JwtExceptionHandler;