const INVALID_MESSAGE = "Invalid input";

const convertToDecimal = (binary, isFractional, proceed) => {
    let decimal = 0;
    const binaryArray = Array.from(`${binary}`);
    if (!isFractional) {
        for (let power = 0, i = binaryArray.length - 1; i >= 0; i--) {
            const digitInt = parseInt(binaryArray[i]);
            if (digitInt === 0 || digitInt === 1) {
                decimal += digitInt * 2 ** power++;
            } else {
                decimal = null;
                break;
            }
        }
    } else {
        for (let power = 1, j = 0; j < binaryArray.length; j++) {
            const digitFloat = parseInt(binaryArray[j]);
            if (digitFloat === 0 || digitFloat === 1) {
                decimal += digitFloat / 2 ** power++;
            } else {
                decimal = null;
                break;
            }
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

const getFragmentResult = (input, isFractional = false) => {
    const result = { success: false, message: INVALID_MESSAGE, };
    if (input !== "0") {
        validateBinary(input, (binaryNumber) => {
            if (binaryNumber) {
                convertToDecimal(binaryNumber, isFractional, (decimalNumber) => {
                    if (decimalNumber) {
                        result.success = true;
                        result.message = decimalNumber;
                    }
                });
            }
        });
    } else {
        result.success = true;
        result.message = 0;
    }
    return result;
}

const getDecimal = (input) => {
    const result = { success: false, message: INVALID_MESSAGE, };
    if (input && input !== "0") {
        const inputParts = input.split(".");
        if (inputParts && inputParts.length <= 2) {
            const integralResult = getFragmentResult(inputParts[0]);
            if (integralResult.success) {
                result.success = true;
                result.message = integralResult.message;
                if (inputParts[1]) {
                    const fractionalResult = getFragmentResult(inputParts[1], true);
                    if (fractionalResult.success) {
                        result.message += fractionalResult.message;
                    } else {
                        result.success = false;
                        result.message = INVALID_MESSAGE;
                    }
                }
            }
        }
    } else if (input === "0") {
        result.success = true;
        result.message = 0;
    }
    return result;
};

module.exports = {
    getDecimal,
    INVALID_MESSAGE
};
