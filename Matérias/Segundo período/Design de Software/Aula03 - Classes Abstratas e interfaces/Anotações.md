# Princípios de Orientação ao objeto

## Classe abstrata

    Usamos classes abstratas para representar grupos que têm características comuns, mas que, em alguns detalhes específicos, agem de maneira diferente.

    - Classes que não podem ser instanciadas.
    - Define atributos e operações que outras classes irão herdar posteriormente.
    - Pode possuir declaraçções de métodos vazias e/ou métodos
    - implementados.

## interfaces

    Funciona como um “Contrato' para uma ou mais classes;

    Define comportamento obrigatório que alguma classe deve possuir;

    É implementada, por uma ou mais classes, as quais prometem
    implementar todos os métodos nela especificados;

    Possui declarações vazias de métodos;

    Todos os métodos na interface são abstract e public por padrão, colocar
    esses modificadores no código é redundância;

    Toda variável é final. Ou seja não pode ser alterada.

    OBS**: A palavra implements evidencia que a classe está atrelado a uma interface.

**Diferença**

    Uma diferença entre classe e interface é que a classe declara e
    implementa seus métodos, enquanto a interface apenas declara.


## Ecapsulamento

Usa-se o modificador de acesso private

O ecapsulamento vai proteger os dados mediante a  visibilidade disponibilizada aos atributos e métodos

Ex: Private int quantidadeCachorros;



**Pilares da Orientação a Objeto**

    Encapsulament => private
    Herança
    Polimorfismo
    Composição

