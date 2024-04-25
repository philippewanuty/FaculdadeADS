/* comum function */

function area(b, a) {
  return (b * a) / 2;
}

var square = area(10, 9);
console.log(square);

function hello(nome){
    return `Hello my name is ${nome} nice to meet you!`
}
var myName = hello('Philippe')
console.log(myName)

/* anonymous function */

var avarege = function (a, b, c, d) {
  return (a + b + c + d) / 4;
};
console.log(avarege(2, 5, 4, 5));


/* Arrow function */
/*(parameters) => return expression*/


const helloArrow = (myName) => `{Hello my name is ${myName} nice to meet you!`

console.log(helloArrow('Philippe'))


