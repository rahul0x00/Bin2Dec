const { getDecimal, INVALID_MESSAGE } = require("../src/core/conversion");

describe("test suite - tests the binary to decimal functionality - integer numbers (whole)", () => {
    it("test case - 1. invalid inputs - undefined", () => {
        const output = getDecimal(undefined);
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 2. invalid inputs - alphabetical", () => {
        const output = getDecimal("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 3. invalid inputs - decimal but 10s", () => {
        const output = getDecimal("23456789");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 4. invalid inputs - special characters", () => {
        const output = getDecimal("!@#$%^&*()~{}:<>?");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 5. invalid inputs - decimal with 10s", () => {
        const output = getDecimal("1234567890");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 6. invalid inputs - alphanumeric", () => {
        const output = getDecimal("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 7. invalid inputs - mixed characters", () => {
        const output = getDecimal(" 1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()~{}:<>?");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 8. valid inputs - valid binary number - 0", () => {
        const output = getDecimal("0");
        expect(output).toBeDefined();
        expect(output.success).toEqual(true);
        expect(typeof output.message).toEqual("number");
        expect(output.message).toEqual(0);
    });

    it("test case - 9. valid inputs - valid binary number - 1", () => {
        const output = getDecimal("1");
        expect(output).toBeDefined();
        expect(output.success).toEqual(true);
        expect(typeof output.message).toEqual("number");
        expect(output.message).toEqual(1);
    });

    it("test case - 10. valid inputs - valid binary number", () => {
        const output = getDecimal("1111");
        expect(output).toBeDefined();
        expect(output.success).toEqual(true);
        expect(typeof output.message).toEqual("number");
        expect(output.message).toEqual(15);
    });
});
