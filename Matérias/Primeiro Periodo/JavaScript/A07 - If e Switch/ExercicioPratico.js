// Atividade prática 2 - Switch  

/* Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for selecionada, exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.*/

var bebida = prompt('Qual a bebiba que voce deseja? Escolha entre café, leite ou chá').toLowerCase();
var valor = 0;

switch (bebida) {
  case 'café':
    valor = 3.5;
    alert('Voce escolheu ' + bebida + ' e o valor a ser pago é R$: ' + valor.toFixed(2));
    break;

  case 'leite':
    valor = 2.0;
    alert('Voce escolheu ' + bebida + ' e o valor a ser pago é R$: ' + valor.toFixed(2));
    break;

  case 'chá':
    valor = 1.5;
    alert('Voce escolheu ' + bebida + ' e o valor a ser pago é R$: ' + valor.toFixed(2));
    break;

  default:
    alert('Opção inválida, escolha uma bebiba entre café, leite ou chá.');
}


//Para compilação do código deve ser usado juntamente com uma página html com o apontamento para este código javascript.