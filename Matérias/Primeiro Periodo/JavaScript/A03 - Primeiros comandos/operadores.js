var numero = 8;
var numeroSoma = numero + 10;
var numeroSub = numero - 2;
var numeroDiv = numero / 2;
var incremento = 0;

//incremento
/*while (numero <= 29) {
  numero += 3;
  incremento++;
  console.log(numero); }*/

console.log("Soma: " + numeroSoma);
console.log("Subtração: " + numeroSub);
console.log("Divisão: " + numeroDiv);
console.log("Valor Looping: " + numero);
console.log("Eu obtive " + incremento + " loopings.");

//comparador
console.log("Comparador : " + (numero > incremento));

// verificar se a é maior que b e b é divisivel por 2
var a = 5;
var b = 9;
// verificar se a é maior que b e b é divisivel por 2
console.log("teste 1: " + (a > b && b % 2 == 0));
//verificar se b é maior ou igual a a ou b dividido por 2 o resultado é dois
console.log("teste 2: " + (b >= a || b / 2 == 2));

// verificar se a é maior que b e b maior ou igual a 5
console.log("teste 3: " + (a > b && b >= 5));

//verificar se b é par ou impar usando ternário
var parImpar = b % 2 == 0 ? "par" : "impar";

console.log("impar ou par? : " +parImpar);
