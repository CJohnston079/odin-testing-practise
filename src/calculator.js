// Write a calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

const calculator = {
	add: (a, b = 0) => a + b,
	subtract: (a, b = 0) => a - b,
	multiply: (a, b = 1) => a * b,
	divide: (a, b = 1) => {
		if (b === 0) {
			throw new Error("Error: 0 is not a valid divisor");
		}
		return a / b;
	},
};

export default calculator;
