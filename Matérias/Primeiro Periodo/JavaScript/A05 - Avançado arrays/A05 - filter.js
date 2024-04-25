//.filter

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter((elem) => elem / 2 === 2);
var resultado2 = numeros.filter((elem) => elem % 2 === 0);

function numMaior(numM) {
   return numM > 7;
}
var resultado3 = numeros.filter(numMaior);

console.log(resultado);
console.log(resultado2);
console.log(resultado3)


