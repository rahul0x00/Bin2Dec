const { getDecimal, INVALID_MESSAGE } = require("../src/core/conversion");

describe("test suite - tests the binary to decimal functionality - float numbers (fraction)", () => {
    it("test case - 1. invalid inputs - fraction dot", () => {
        const output = getDecimal(".");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 2. invalid inputs - decimal dot", () => {
        const output = getDecimal("1234567890.");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 3. invalid inputs - decimal dot decimal", () => {
        const output = getDecimal("1234567890.1234567890");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 4. invalid inputs - decimal dot decimal dot", () => {
        const output = getDecimal("1234567890.1234567890.1234567890");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 5. invalid inputs - alphabetical dot", () => {
        const output = getDecimal("ABCDEFGHIJKLMNOPQRSTUVWXYZ.");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 6. invalid inputs - alphabetical dot alphabetical", () => {
        const output = getDecimal("ABCDEFGHIJKLMNOPQRSTUVWXYZ.ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 7. invalid inputs - alphabetical dot alphabetical dot", () => {
        const output = getDecimal("ABCDEFGHIJKLMNOPQRSTUVWXYZ.ABCDEFGHIJKLMNOPQRSTUVWXYZ.ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 8. invalid inputs - special dot", () => {
        const output = getDecimal("!@#$%^&*()~{}:<>?.");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 9. invalid inputs - special dot special", () => {
        const output = getDecimal("!@#$%^&*()~{}:<>?.!@#$%^&*()~{}:<>?");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 10. invalid inputs - special dot special dot", () => {
        const output = getDecimal("!@#$%^&*()~{}:<>?.!@#$%^&*()~{}:<>?.!@#$%^&*()~{}:<>?");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    // test case fails but got it handled in the browser
    it("test case - 11. invalid inputs - dot 0", () => {
        const output = getDecimal(".0");
        expect(output).toBeDefined();
        expect(output.success).toEqual(false);
        expect(output.message).toEqual(INVALID_MESSAGE);
    });

    it("test case - 12. valid inputs - 0 dot", () => {
        const output = getDecimal("0.");
        expect(output).toBeDefined();
        expect(output.success).toEqual(true);
        expect(typeof output.message).toEqual("number");
        expect(output.message).toEqual(0);
    });

    it("test case - 13. valid inputs - 0 dot binary", () => {
        const output = getDecimal("0.1");
        expect(output).toBeDefined();
        expect(output.success).toEqual(true);
        expect(typeof output.message).toEqual("number");
        expect(output.message).toEqual(0.5);
    });

    it("test case - 14. valid inputs - binary dot binary", () => {
        const output = getDecimal("10.11");
        expect(output).toBeDefined();
        expect(output.success).toEqual(true);
        expect(typeof output.message).toEqual("number");
        expect(output.message).toEqual(2.75);
    });
});
