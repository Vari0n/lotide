const middle = function(array) {
  let result = [];
  let length = array.length;
  if (length === 1 || length === 2) {
    return [];
  }
  //console.log(array[i]);
  if (length % 2 === 0) {
    result.push(array[(length) / 2 - 1]);
    result.push(array[(length) / 2]);
  } else {
    result.push(array[(length - 1) / 2]);
  }
  return result;
};

module.exports = middle;

