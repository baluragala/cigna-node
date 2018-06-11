function first(array) {
  return array[0];
}

function last(array) {
  return array[array.length - 1];
}

// exports.firstElement = first;
// exports.last = last;

module.exports = {
  first,
  PI: 3.1414,
  settings: {
    isEnbaled: true
  },
  ratings: [1, 2, 4, 5]
};
