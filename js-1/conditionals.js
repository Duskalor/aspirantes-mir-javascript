function calcularColor(color) {
  if (color == 1) {
    color = 'black';
  } else if (color === 2) {
    color = 'blanco';
  } else if (color === 3) {
    color = 'rojo';
  } else {
    color = 'verde';
  }

  return 'El color es ' + color;
}

console.log(calcularColor(1)); // "El color es negro"
console.log(calcularColor(2)); // "El color es blanco"
console.log(calcularColor(3)); // "El color es azul"
console.log(calcularColor(8)); // "El color es verde"
