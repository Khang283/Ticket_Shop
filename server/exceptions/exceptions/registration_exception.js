class RegistrationException extends Error {
    constructor(){
        super("Registration Error");
        this.name = "Registration Error";
    }
}

module.exports = {RegistrationException} ;