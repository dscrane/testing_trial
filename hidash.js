module.exports = {
  // implement our own version of .forEach() to iterate over an array
  // iterate over every element in an array (arr) and perform function (fn) on each element
  forEach(arr, fn) {
    /* for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      fn(value, i);
    } */

    for (let index in arr) {
      fn(arr[index], index);
    }
  },

  map(arr, fn) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      output.push(fn(arr[i]));
    }
    return output;
  },
};
