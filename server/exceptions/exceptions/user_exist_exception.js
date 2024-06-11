class UserExistException extends Error {
    constructor(username){
        super(`User Exception: user ${username} not exist`);
        this.name = "User Exist Exception";
    }
}

module.exports = {UserExistException};