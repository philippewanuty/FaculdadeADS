/* Exercício para atividade valendo nota, aula 10 */

class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá me chamo ${this.nome} e faço parte de sua equipe `);
  }
  trabalhar() {
    console.log(`${this.nome} está trabalhando em seu cargo de ${this.cargo}`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`${this.nome} faz parte do time da gerencia desta empresa no deparamento de ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }
  programar() {
    console.log(`${this.nome} é programador na linguagem ${this.linguagem}`);
  }
}

const gerente = new Gerente('Philippe', 30, 'Gerente', 'TI');
const desenvolvedor = new Desenvolvedor('Wanuty', 30, 'Web developer', 'JavaScript');

gerente.seApresentar();
gerente.gerenciar();
gerente.trabalhar();

console.log('----------------'+'x'+'----------------')

desenvolvedor.seApresentar();
desenvolvedor.programar();
desenvolvedor.trabalhar();
