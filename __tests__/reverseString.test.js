import reverseString from "../src/reverseString";

describe("reverseString", () => {
	it("returns a string", () => {
		expect(typeof reverseString("test")).toBe("string");
	});
	it("returns an empty string if invoked with no argument", () => {
		expect(reverseString()).toBe("");
	});
	it("returns an empty strng if passed an empty string", () => {
		expect(reverseString("")).toBe("");
	});
	it("returns the same string if passed a palindrome", () => {
		expect(reverseString("tacocat")).toBe("tacocat");
	});
	it("reverses an even length string", () => {
		expect(reverseString("test")).toBe("tset");
	});
	it("reverses an odd length string", () => {
		expect(reverseString("testing")).toBe("gnitset");
	});
	it("preserves casing of characters", () => {
		expect(reverseString("Test")).toBe("tseT");
	});
});
