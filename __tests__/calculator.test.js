import calculator from "../src/calculator";

describe("calculator", () => {
	it("has methods for addition, subtraction, multiplication, and division", () => {
		expect(calculator).toHaveProperty("add");
		expect(calculator).toHaveProperty("subtract");
		expect(calculator).toHaveProperty("multiply");
		expect(calculator).toHaveProperty("divide");

		expect(typeof calculator.add).toBe("function");
		expect(typeof calculator.subtract).toBe("function");
		expect(typeof calculator.multiply).toBe("function");
		expect(typeof calculator.divide).toBe("function");
	});
});
