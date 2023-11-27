/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array.push(appendString + idx);
  }

  return array;
}
