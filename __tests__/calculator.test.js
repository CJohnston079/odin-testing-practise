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
});
