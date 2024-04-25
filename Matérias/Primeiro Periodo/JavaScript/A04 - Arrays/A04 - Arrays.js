var banana = 3.97;
var uva = 9;
var manga = 6;
var frutas = [banana, uva, manga]; //Exemplo de array
var legumes = [];
legumes[0] = "Cenoura";
var numeros = [2, 4, 6, 8];

//prints


console.log("valor das frutas " + frutas);
console.log("O valor da uva é: " + frutas[1]); //referenciando um array
console.log(legumes[0]);


//imprimir cada numero dentro de um array

for (var pos = 0; pos < numeros.length; pos++) {
   console.log("numeros: " + numeros[pos]);
}

// Calcular a média dos valores de um array

var soma = 0;
for (var pos = 0; pos < numeros.length; pos++) {
    soma += numeros[pos];
}
var divisao = soma / pos;
console.log("A média é : " + divisao);


