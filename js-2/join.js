const join = (arr) => {
  var b = '';
  for (const a of arr) {
    b = `${b} ${a}`;
  }
  return b;
};

console.log(join([1, 3, 2]));
console.log(join([10, 9, 8, 7, 6, 5, 4]));
