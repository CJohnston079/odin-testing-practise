import analyseArray from "../src/analyseArray";

describe("analyseArray", () => {
	const result = analyseArray([1, 8, 3, 4, 2, 6]);

	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returnsa na object with properties average, min, max and length", () => {
		expect(result).toHaveProperty("average");
		expect(result).toHaveProperty("min");
		expect(result).toHaveProperty("max");
		expect(result).toHaveProperty("length");
	});
	it("returns the average of an array of numbers in the average property", () => {
		expect(result.average).toBe(4);
	});
	it("returns the smallest number of an array of numbers in the min property", () => {
		expect(result.min).toBe(1);
	});
	it("returns the largest number of an array of numbers in the max property", () => {
		expect(result.max).toBe(8);
	});
	it("returns the length of the array in the length property", () => {
		expect(result.length).toBe(6);
	});
	it("throws an error if passed an array containing at least one non-numeric value", () => {
		expect(() => analyseArray(["1", 2, true, 4, 5])).toThrow("array contains non-numeric values");
	});
});
