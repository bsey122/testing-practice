import caesarCipher from "../scripts/caesarCipher";

test("Gets string and returns it with each character shifted", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("Keeps the case the same", () => {
  expect(caesarCipher("Defend The East Wall Of The Castle", 1)).toBe(
    "Efgfoe Uif Fbtu Xbmm Pg Uif Dbtumf"
  );
});

test("Works with punctuation", () => {
  expect(caesarCipher("defend, the east wall of the castle!", 1)).toBe(
    "efgfoe, uif fbtu xbmm pg uif dbtumf!"
  );
});
