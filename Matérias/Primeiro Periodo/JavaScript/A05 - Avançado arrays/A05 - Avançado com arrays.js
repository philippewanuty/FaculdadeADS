var lista = [1, 2, 3, "oi", 4, 9, 10];

lista.splice(3, 1, "olá"); // (x,y,z) x= será o incio  y= será o fim z= será a substituição
console.log(lista);

var listaBrasil = ["jefferson", "eryka", "philippe", "jeova", "eva"];
var listaAmerican = ["savana", "dona", "Sherif"];

console.log(listaBrasil.indexOf("philippe"));

//.slice
console.log(listaBrasil.slice(0, 2)); //o slice não modifica o array
console.log(listaBrasil);
//.splice
console.log(listaBrasil.splice(1, 2)); //o splice modifica o array
console.log(listaBrasil);

//.concat
var family = listaBrasil.concat(listaAmerican);
console.log(family)

for (var pos in family){
    console.log('Nome: '+ family[pos])
}

//.filter