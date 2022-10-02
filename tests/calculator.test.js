import calculator from "../scripts/calculator";

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds '1' + 2 to equal 3", () => {
  expect(calculator.add("1", 2)).toBe(3);
});

test("subtracts 5 - 7 to equal -2", () => {
  expect(calculator.subtract(5, 7)).toBe(-2);
});

test("subtracts '5' - 7 to equal -2", () => {
  expect(calculator.subtract("5", 7)).toBe(-2);
});

test("divides 20 / 4 to equal 5", () => {
  expect(calculator.divide(20, 4)).toBe(5);
});

test("divides '20' / 4 to equal 5", () => {
  expect(calculator.divide("20", 4)).toBe(5);
});

test("multiplies 6 * 3 to equal 18", () => {
  expect(calculator.multiply(6, 3)).toBe(18);
});

test("multiplies '6' * 3 to equal 18", () => {
  expect(calculator.multiply(6, 3)).toBe(18);
});
