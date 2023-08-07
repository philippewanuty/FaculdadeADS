//.map() -  sintaxe básica do método
//const novoArray = arrayOriginal.map(funcaoDeMapeamento);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosDobrados = numeros.map((a, b) => a * b); // indice atual multiplicando o anterior

console.log(numerosDobrados);


// array de objetos
var cachorros = [
   { raca: "buldog", tamanho: "medio" },
   { raca: "rusky", tamanho: "grande" },
   { raca: "chihuahua", tamanho: "pequeno" },
];

const racaCachorro = cachorros.map(nomeRaca => nomeRaca.raca)
const tamanhoCachorro = cachorros.map((tamanhoRaca) => tamanhoRaca.tamanho);


console.log(tamanhoCachorro);
console.log(racaCachorro)