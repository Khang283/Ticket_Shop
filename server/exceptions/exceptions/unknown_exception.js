class UnknownException extends Error {
    constructor(){
        super("Internal Server Error");
        this.name = "Unknown Exception";
    }
}

module.exports = {UnknownException};