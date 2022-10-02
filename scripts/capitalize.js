function capitalize(str) {
  const firstLetter = str.substring(0, 1).toUpperCase();
  const restOfString = str.substring(1);
  return firstLetter + restOfString;
}
export default capitalize;
