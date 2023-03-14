const maxIndex = (arr) => {
  var b = 0;
  var c = -1;
  for (const a of arr) {
    if (a > b) {
      b = a;
      c = arr.indexOf(a);
    }
  }
  return c;
};

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
