import calculator from "../src/calculator";

describe("calculator", () => {
	const operations = [
		["add", calculator.add, 15],
		["subtract", calculator.subtract, 9],
		["multiply", calculator.multiply, 36],
		["divide", calculator.divide, 4],
	];
	it.each(operations)("has method for %s operation", (operationName, operation) => {
		expect(calculator).toHaveProperty(operationName);
		expect(typeof operation).toBe("function");
	});
	it.each(operations)("%s returns a number", (_, operation) => {
		expect(typeof operation(12, 3)).toBe("number");
	});
	it.each(operations)("%s performs operation on two numbers", (_, operation, result) => {
		expect(operation(12, 3)).toBe(result);
	});
	it.each(operations)("%s returns the same number if only passed one number", (_, operation) => {
		expect(operation(12)).toBe(12);
	});
	it.each(operations)("%s returns 0 if invoked with no arguments", (_, operation) => {
		expect(operation()).toBe(0);
	});
	it.each(operations)("%s returns an error if invoked with an invalid operand", (_, operation) => {
		expect(() => operation(12, "three")).toThrow(
			"Error: one or both of 12 and three are invalid operands"
		);
		expect(() => operation("twelve", 3)).toThrow(
			"Error: one or both of twelve and 3 are invalid operands"
		);
		expect(() => operation([4, 8], true)).toThrow(
			"Error: one or both of 4,8 and true are invalid operands"
		);
	});
	it("divide returns an error if b === 0", () => {
		expect(() => calculator.divide(12, 0)).toThrow("Error: 0 is not a valid divisor");
	});
});
