# OBJETOS E CLASSES

# Objetos

## O que são objetos?

     - É uma representação de um objeto podendo ser real ou abstrato.
     - É todo elemento de representação e atuação dentro do contexto do negócio.
     - Possui atributos e métodos
     - Recebe conteúdo diferente dependendo do caso.
     - Objetos podem interagir entre si

  **ATRIBUTOS**

    Cachorro
     - Um nome
     - Uma idade
     - Cor dos pelos
     - Raça
     - Peso
     - Possui ou não pedigree
     - Sexo

  **MÉTODOS (AÇÕES)**

      Recebe parametros e sempre tem um abre e fecha parentesis no final.

    Cachorro
     - Correr (na rua, na calçada)
     - Latir()
     - Sentar()
     - Comer()
     - Dormir()
     - Lamber(A vasília, o dono)

## Composição de objetos

    - Estado
    - Comportamento (métodos/ ações)
    - Identidade

**ESTADO**

    - Vai definir qual é a posição do objeto em um determinado momento, dentro do processo do negócio.
    - Reflete os valores correntes dos atributos do objeto em determinado momento (também chamado de propriedades).
    Ex: Em pé / Deitado

**COMPORTAMENTO (FUNÇÃO, OPERAÇÃO)**

    - São todas as ações que podem ser realizados naquele objeto
    - São as funções que podem ser executadas por um determinado objeto;
    - Corresponde aos métodos;
    - O que você pode fazer com esse objeto.
    Ex: Comandar

**IDENTIDADE**

    - Um objeto é único, mesmo que o seu estado seja idêntico ao de outro.
    Ex: Cachorro 1 (pitoco), cachorro 2 (pichu) - mesmo sendo ambos da mesma raça e cor



**RESUMO**

    Um objeto apresenta três características básicas: o estado, a identidade e o comportamento.
    A parte de dados de um objeto é definida por um conjunto de atributos e a porção funcional por um conjunto de mensagens(métodos).

# Classes

    Em Java a classe sempre vem primeiro que o objeto

    É um modelo de representação de um conjunto de objetos dentro do contexto do negócio.
    Ex: Cachorro, Carro.


    Public class Cachorro {
        int idade;
        String nome;

        void correr() {
          System.out.println ("Correndo..");
        }
        void comer (String nomeComida){
           System.out.println ("Comendo" + nomeComida);
        }
    }

**Instanciar**

  Para usar uma classe voce precisa instanciar um objeto

      Cachorro Budog = new Cahorro();
      Cachorro.correr();

