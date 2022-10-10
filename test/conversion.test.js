const { getDecimal } = require("../src/core/conversion");

describe("test suite - tests the binary to decimal functionality - validation", () => {
    it("test case - 1. invalid inputs - undefined", () => {
        const output = getDecimal(undefined);
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual("Invalid input");
    });

    it("test case - 2. invalid inputs - alphabetical", () => {
        const output = getDecimal("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual("Invalid input");
    });

    it("test case - 3. invalid inputs - decimal but 10s", () => {
        const output = getDecimal("23456789");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual("Invalid input");
    });

    it("test case - 4. invalid inputs - special characters", () => {
        const output = getDecimal("!@#$%^&*()~{}:<>?");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual("Invalid input");
    });

    it("test case - 5. invalid inputs - decimal with 10s", () => {
        const output = getDecimal("1234567890");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual("Invalid input");
    });

    it("test case - 6. valid inputs - valid binary number", () => {
        const output = getDecimal("1111");
        expect(output).toBeDefined();
        expect(output.success).toEqual(true);
        expect(typeof output.message).toEqual("number");
        expect(output.message).toEqual(15);
    });
});
