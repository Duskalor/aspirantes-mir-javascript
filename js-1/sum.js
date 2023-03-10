const sum = (numero) => {
  if (numero > 0) {
    return numero + sum(numero - 1);
  }
  return 0;
};

console.log(sum(4)); // 1 + 2 + 3 + 4 = 10
console.log(sum(10)); // 55
console.log(sum(15)); // 120
