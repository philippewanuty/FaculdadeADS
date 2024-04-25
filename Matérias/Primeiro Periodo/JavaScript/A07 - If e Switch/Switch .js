var diaDaSemana = 'terca';

switch (diaDaSemana) {
  case 'segunda':
    console.log('Hoje é segunda-feira.');
    break;
  case 'terca':
    console.log('Hoje é terça-feira.');
    break;
  case 'quarta':
    console.log('Hoje é quarta-feira.');
    break;
  case 'quinta':
    console.log('Hoje é quinta-feira.');
    break;
  case 'sexta':
    console.log('Hoje é sexta-feira.');
    break;
  default:
    console.log('Fim de semana!');
}

var a = 6;
var b = 2;

var impaPar = a % b;

switch (impaPar) {
  case 0:
    console.log('O numero ' + a + ' é par');
    break;
  case 1:
    console.log('O numero ' + a + ' é im par');
    break;
  default:
    console.log('xi deu erro');
}

let totalCompra = 150;
let desconto = '';

if (totalCompra > 200) {
  desconto = '20%';
} else if (totalCompra > 100) {
  desconto = '10%';
} else if (totalCompra > 50) {
  desconto = '5%';
} else {
  desconto = 'Sem desconto';
}

console.log(desconto);
