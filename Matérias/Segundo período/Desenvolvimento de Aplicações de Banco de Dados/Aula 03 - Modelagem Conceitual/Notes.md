# Modelagem banco de dados

Existem vários tipos de modelos de banco de dados.

É equivalente e importância assim como as plantas de uma casa (planta baixa, planta eletrica, hidráulica etc..) 

 Mundo real -> Análise de requisitos -> **Modelo Conceitual** -> modelo Lógico -> Modelo Físico

## Modelagem Conceitual 

  Primeiro nível de modelagem


    Representação abstrata de um sistema, identificando entidades e seus relacionamentos principais.

**Lembre-se:**


  <u>Entidades:</u> São objetos do nosso universo discutido, elas precisam ser distintas. são relevantes para armazenar dados.


  <u>Atributos:</u> Identifica, Quantitica e qualifica uma entidade.

###  Notação

    Forma como é representada

 - Entidade: Quadrado com bordas arredondadas

    - Atributos: Linha com um circulo no final. 

      - Circulo pintado: identificador( Não pode repitir e não pode ser nulo)
    
      -  Circulo vazio:Pode ser repitido ou pode ser nulo.

  - Relacionamento: Losangulo


 ### Cardinalidade

    É o grau de relação entre cada entidade. (quantidade) Mínima e máxima.

    (n,1) Lê se, no mínimo muitos e no maximo 1 

    Livro -(1,n)-pode ter-(1,n)- Autor

### Definição do escopo

Levantamento de dados e especificação dos requisitos funcionais.

    É com base no escopo/ requisitos funcionais que conseguimos determinar as entidades e atributos do modelo conceitual.



