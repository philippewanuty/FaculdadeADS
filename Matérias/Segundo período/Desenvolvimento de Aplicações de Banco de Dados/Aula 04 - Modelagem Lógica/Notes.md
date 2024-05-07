 # Conceitos importantes - Modelagem 

  - Modelagem Conceitual - Mundo real - relacionamentos
  - Modelagem Lógica - Estruturas para armazenamento dos dados.
  - Modelagem Física

  ## Modelagem lógica

  Além de informar como no modelo conceitual informa também os tipos dos atributos e tamanho e suas chaves primarias e estrangeiras.

    Relembrando Modelagem Conceitual:

    Entidade
    Atributo chave
    Atributo comum
    Relacionamentos

## Data Types - Oracle

- CHAR(n): Se o n não for informado representará apenas um único caractere. tamanho máximo 2000 caracteres
- VARCHAR2(n): n pode ser até 4000 caracteres
- NUMBER(n): Representa um numero até n digitos, quando não apresentado possuirá uma precisão de 38 digitos.
- NUMBER (n , d) Representa um numero até n digitos d é o numero máximo de decimais após a virgula.
- DATE: para armazenar datas
- BLOB - Armazenamento de videos e áudios e imagens Binary Larg OBject
- CLOB - Armazenamento de texto mais de 4gb - Character Large OBject
- BOOLAD - TRUE, FALSE E NULL

## Foreign Key - Chave estrangeira (FK)


é responsavel por fornecer o relacionamento entre outra tabela, é uma chave que vem de outra tabela, sempre vem de uma PK - Primary Key

#### Obs
      Todas as entidades do modelo lógico vira tabela no modelo físico
      os atributos viram colunas.


## Ciclo de vida tradicional (tradicional)

- Levantamento de dados
- Especifica requisitos
- Projeto
- Desenvolvimento
- implanta
- mantém

## Abordagens de análise

- Bottom-up (Engenharia revesta)

      os dados e as estruturas das tabelas já existem, basta transforma-los em modelagem

- Top - down (tradicional)    

      igual o que estpa especificado a cima.

- inside-out

      ajuste e implementação

## Cardinalidade x Relacionamento

      (x,y) (Mínimo, máximo)
      pode ser 0, 1 ,n

>A chave estrangeira sempre fica do lado do n

## Chave únicas e não nulas

      - A constraint null quer dizer ausencia de valor.
      - A constraint unique quer dizer que não pode se repetir. exemplo: primary key, cpf, cnh

## Regras de derivação

