class Conversion {
    constructor(input) {
        this.input = input;
    }

    get bin2Dec() {
        const result = { success: false, message: "Invalid input", }
        const input = this.input;
        if (input) {
            let converted = input.match(/[0-1]+/);
            if (input.match(/[0-1]+/)) {
                result.success = true;
                result.message = converted[0];
            }
        }
        return result;
    }
}

module.exports = Conversion;