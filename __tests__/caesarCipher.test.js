import caesarCipher from "../src/caesarCipher";

describe("caesarCipher", () => {
	it("returns a string", () => {
		expect(typeof caesarCipher("Hello World!", 2)).toBe("string");
	});
	it("returns the input string if shiftFactor is 0 or undefined", () => {
		expect(caesarCipher("Hello World!", 0)).toBe("Hello World!");
		expect(caesarCipher("Hello World!")).toBe("Hello World!");
	});
	it("returns a string shifted by shiftFactor", () => {
		expect(caesarCipher("hello world", 1)).toBe("ifmmp xpsme");
		expect(caesarCipher("hello world", 3)).toBe("khoor zruog");
	});
	it("works when shiftFactor is a negative number", () => {
		expect(caesarCipher("hello world", -2)).toBe("fcjjm umpjb");
		expect(caesarCipher("hello world", -3)).toBe("ebiil tloia");
	});
	it("wraps characters from z to a and vice versa", () => {
		expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi");
		expect(caesarCipher("hello world", -5)).toBe("czggj rjmgy");
	});
});
