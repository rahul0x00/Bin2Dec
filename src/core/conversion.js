
const convertToDecimal = (binary, proceed) => {
    let decimal = 0;
    const binaryArray = Array.from(`${binary}`);
    for (let power = 0, index = binaryArray.length - 1; index >= 0; index--) {
        const digit = parseInt(binaryArray[index]);
        if (digit === 0 || digit === 1) {
            decimal += digit * 2 ** power++;
        } else {
            decimal = null;
            break;
        }
    }
    proceed(decimal);
};

const validateBinary = (input, proceed) => {
    let isValidInput = false;
    if (input && !isNaN(parseFloat(input))) {
        isValidInput = true;
    }
    proceed(isValidInput ? input : null);
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
