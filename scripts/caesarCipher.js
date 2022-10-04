function mod(dividend, divisor) {
  const remainder = dividend % divisor;
  return remainder < 0 ? remainder + divisor : remainder;
}

function encrypt(letter, shift) {
  const char = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
  };
  for (const key in char) {
    if (char[key] === letter) {
      const newKey = mod(+key + shift, 26);
      return char[newKey];
    }
  }
}

function caesarCipher(str, shift) {
  let cipherStr = "";
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (char.toLowerCase() !== char.toUpperCase()) {
      if (char.toLowerCase() === char) {
        cipherStr += encrypt(char, shift);
      }
      if (char.toUpperCase() === char) {
        const upperCase = str[index].toLowerCase();
        cipherStr += encrypt(upperCase, shift).toUpperCase();
      }
    } else {
      cipherStr += char;
    }
  }
  return cipherStr;
}
export default caesarCipher;
