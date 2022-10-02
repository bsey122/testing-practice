import capitalize from "../scripts/capitalize";

test("gets string from function and returns first character capitalized", () => {
  expect(capitalize("capital")).toBe("Capital");
});
