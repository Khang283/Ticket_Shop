class JwtException extends Error {
    constructor(token){
        super(`Token invalid ${token}`);
        this.name = "Jwt Exception" ;
    }
}

module.exports = {JwtException}