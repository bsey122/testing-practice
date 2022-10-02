import reverseString from "../scripts/reverseString";

test("gets a string and returns it reversed", () => {
  expect(reverseString("reverse")).toBe("esrever");
});
