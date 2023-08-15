var fruits = [
  { name: 'grapeberry', type: 'small', color: 'navy', value: 9.0 },
  { name: 'strawberry', type: 'small', color: 'red', value: 10.0 },
  { name: 'apple', type: 'medium', color: 'green', value: 5.0 },
];
var nomes = '';

for (var i = 0; i < fruits.length; i++) {
  nomes += fruits[i].name + ' ';
}
console.log(nomes);

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

for (let item of fruits) {
  console.log(item.value);
}

for (let itens in fruits) {
  console.log(fruits[itens].name);
}