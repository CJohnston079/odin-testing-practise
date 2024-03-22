import calculator from "../src/calculator";

describe("calculator", () => {
	const operations = [
		["add", calculator.add],
		["subtract", calculator.subtract],
		["multiply", calculator.multiply],
		["divide", calculator.divide],
	];
	it.each(operations)("has method for %s operation", (operationName, operation) => {
		expect(calculator).toHaveProperty(operationName);
		expect(typeof operation).toBe("function");
	});
});
