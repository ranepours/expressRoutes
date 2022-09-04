class ExpressError extends Error {
    constructor(message, status){
        super(); //must be called when we're extending
        this.message = message;
        this.status = status;
        console.error(this.stack); //prints out our error stack :)
    }
}

module.exports = ExpressError;