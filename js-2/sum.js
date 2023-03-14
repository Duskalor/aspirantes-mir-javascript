const sum = (arr) => {
  var b = 0;
  for (const a of arr) {
    b = b + a;
  }
  return b;
};

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
