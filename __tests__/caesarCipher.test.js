import caesarCipher from "../src/caesarCipher";

describe("caesarCipher", () => {
	it("returns a string", () => {
		expect(typeof caesarCipher("Hello World!", 2)).toBe("string");
	});
	it("returns the input string if shiftFactor is 0 or undefined", () => {
		expect(caesarCipher("Hello World!", 0)).toBe("Hello World!");
		expect(caesarCipher("Hello World!")).toBe("Hello World!");
	});
});
