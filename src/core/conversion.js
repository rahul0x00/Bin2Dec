
const convertToDecimal = (binary, proceed) => {
    let decimal = 0;
    const binaryArray = Array.from(`${binary}`);
    for (let power = 0, index = binaryArray.length - 1; index >= 0; index--) {
        const digit = parseInt(binaryArray[index]);
        decimal += digit === 0 || digit === 1 ? digit * 2 ** power++ : 0;
    }
    proceed(decimal);
};

const validateBinary = (input, proceed) => {
    if (input) {
        if (!isNaN(parseFloat(input))) {
            proceed(parseFloat(input));
        } else {
            proceed(null);
        }
    } else {
        proceed(null);
    }
};

const getDecimal = (input) => {
    const result = { success: false, message: "Invalid input", };
    validateBinary(input, (binaryNumber) => {
        if (binaryNumber) {
            convertToDecimal(binaryNumber, (decimalNumber) => {
                if (decimalNumber) {
                    result.success = true;
                    result.message = decimalNumber;
                }
            });
        }
    });
    return result;
};

module.exports = {
    getDecimal
};
