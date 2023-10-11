/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      // use !array[i] to find falsy values !!array[i] = array[i]
      newArray.push(array[i]);
    }
  }
  return newArray;
}
