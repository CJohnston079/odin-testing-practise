import capitalise from "../src/capitalise";

describe("capitalise", () => {
	it("returns a string", () => {
		expect(typeof capitalise("test")).toBe("string");
	});
	it("returns an empty string if invoked without an argument", () => {
		expect(capitalise()).toBe("");
	});
	it("returns the same string is first character is already capitalised", () => {
		expect(capitalise("Test")).toBe("Test");
	});
	it("returns a capitalised string when passed a lower case string", () => {
		expect(capitalise("test")).toBe("Test");
	});
	it("returns a capitalised lower case string when passes a mixed case string", () => {
		expect(capitalise("tEsT")).toBe("TEsT");
	});
});
