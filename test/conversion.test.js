const Conversion = require("../src/core/conversion");

describe("test suite - tests the binary to decimal functionality", () => {
    let conversion;

    beforeAll = () => {
        conversion = null;
    }

    it("test case - 1. invalid inputs - undefined", () => {
        conversion = new Conversion(undefined);
        expect(conversion.bin2Dec).toBeDefined();
        expect(conversion.bin2Dec.success).toEqual(false);
        expect(conversion.bin2Dec.message).toEqual("Invalid input");
    });

    it("test case - 2. invalid inputs - alphabetical", () => {
        conversion = new Conversion("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(conversion.bin2Dec).toBeDefined();
        expect(conversion.bin2Dec.success).toEqual(false);
        expect(conversion.bin2Dec.message).toEqual("Invalid input");
    });

    it("test case - 3. invalid inputs - decimal but 10s", () => {
        conversion = new Conversion("23456789");
        expect(conversion.bin2Dec).toBeDefined();
        expect(conversion.bin2Dec.success).toEqual(false);
        expect(conversion.bin2Dec.message).toEqual("Invalid input");
    });

    it("test case - 4. invalid inputs - special characters", () => {
        conversion = new Conversion("!@#$%^&*()~{}:<>?");
        expect(conversion.bin2Dec).toBeDefined();
        expect(conversion.bin2Dec.success).toEqual(false);
        expect(conversion.bin2Dec.message).toEqual("Invalid input");
    });

    it("test case - 5. valid inputs - decimal with 10s", () => {
        conversion = new Conversion("1234567890");
        expect(conversion.bin2Dec).toBeDefined();
        expect(conversion.bin2Dec.success).toEqual(true);
        expect(conversion.bin2Dec.message).toEqual("1");
    });
});
