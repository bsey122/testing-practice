function reverseString(str) {
  let newStr = "";
  for (let index = str.length; index >= 0; index--) {
    newStr += str.substr(index, 1);
  }
  return newStr;
}
export default reverseString;
