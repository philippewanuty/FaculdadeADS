var numeros = [2, 4, 6, 8];
var frutas = ["banana", "mamao", "laranja"];

//* .reverse() - Array invertido

console.log(numeros.reverse());

//* .join()

console.log(numeros.join("/"));

//* .sort() - ordena por sequencia.

console.log(numeros.sort());

//* .shift() - tira o primeiro caractere

//console.log(numeros.shift());

//* .pop - retira o ultimo caractere

//console.log(numeros.pop());

//* .lenght() - retorna o tamanho do array

console.log(numeros.length);

//* .slice() - fatia o elemento selecionado a partir dele pra frente

console.log(numeros.slice(1, 3));
console.log(numeros.slice(2));

//* .indexOf() - informa a posição do item selecionado

console.log(numeros.indexOf(6));
console.log(numeros);
console.log(frutas.indexOf("laranja"));

//* .push() - adiciona um elemento na lista

frutas.push("uva");
console.log(frutas);

