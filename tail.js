
const tail = function(array) {
  let final = 0;
  for (let i = 0; i < array.length; i++) {
    final += i;
  }
  return final;
};

module.exports = tail;

