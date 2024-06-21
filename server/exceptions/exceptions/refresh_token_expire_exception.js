class RefreshTokenExpireException extends Error {
    constructor(refreshToken){
        super(`Refresh Token Exception: refresh token ${refreshToken} expired`);
        this.name = "Refresh Token Expire Exception"
    }
}

module.exports = {RefreshTokenExpireException};