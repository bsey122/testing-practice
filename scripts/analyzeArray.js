function getAverage(array) {
  const length = array.length;
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;
  }
  const average = sum / length;
  return average;
}
function getMin(array) {
  let min = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    min = Math.min(min, element);
  }
  return min;
}
function getMax(array) {
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    max = Math.max(max, element);
  }
  return max;
}
function analyzeArray(array) {
  const length = array.length;
  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);
  return { average, length, min, max };
}
export default analyzeArray;
