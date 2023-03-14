const max = (arr) => {
  var b = 0;
  for (const a of arr) {
    if (a > b) {
      b = a;
    }
  }
  return b === 0 ? undefined : b;
};

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined
