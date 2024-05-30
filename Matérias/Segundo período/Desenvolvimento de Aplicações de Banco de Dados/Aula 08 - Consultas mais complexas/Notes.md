 # Consultas

 Vamos falar sobre as consultas utilizando os operadores `ALL` e `DISTINCT`.

1. **DISTINCT**:
   - O operador `DISTINCT` é usado para remover registros duplicados de um conjunto de resultados.
   - Quando você utiliza `SELECT DISTINCT coluna FROM tabela`, o banco de dados retorna apenas valores únicos da coluna especificada da tabela.
   - É útil quando você precisa de uma lista de valores únicos em uma determinada coluna, por exemplo, ao listar nomes de clientes ou categorias de produtos sem repetições.

2. **ALL**:
   - O operador `ALL` é menos comum e é usado para comparar um valor com todos os valores resultantes de uma subconsulta ou de uma lista.
   - Por exemplo, `SELECT coluna FROM tabela WHERE coluna > ALL (SELECT outra_coluna FROM outra_tabela)` retorna valores da coluna onde a condição é verdadeira para todos os valores da subconsulta.
   - Geralmente, `ALL` é usado com operadores de comparação, como `>`, `<`, `>=`, `<=`, `=`, etc.
   - É importante observar que `ALL` retorna verdadeiro se a comparação for verdadeira para todos os valores resultantes da subconsulta, caso contrário, retorna falso.


## JOINS




1. **Join Natural**:
   O Join Natural é utilizado quando desejamos combinar automaticamente colunas com o mesmo nome de duas tabelas. Por exemplo, considere as tabelas `funcionarios` e `departamentos`, ambas possuindo uma coluna chamada `departamento_id`. Podemos realizar um Join Natural da seguinte maneira:

```sql
SELECT * FROM funcionarios NATURAL JOIN departamentos;
```

Neste exemplo, o banco de dados irá automaticamente comparar e combinar as colunas `departamento_id` das tabelas `funcionarios` e `departamentos`.

2. **Full Outer Join**:
   O Full Outer Join retorna todas as linhas de ambas as tabelas, combinando as linhas quando houver correspondência e preenchendo com valores nulos quando não houver. Utilizando as mesmas tabelas `funcionarios` e `departamentos`, podemos realizar um Full Outer Join da seguinte forma:

```sql
SELECT * FROM funcionarios 
FULL OUTER JOIN departamentos ON funcionarios.departamento_id = departamentos.departamento_id;
```

Este comando SQL irá retornar todas as linhas da tabela `funcionarios` e da tabela `departamentos`, combinando as linhas quando os valores de `departamento_id` forem iguais e preenchendo com valores nulos quando não houver correspondência.

3. **Cross Join**:
   O Cross Join retorna o produto cartesiano das tabelas, combinando cada linha de uma tabela com cada linha da outra tabela. Suponha que queremos calcular o produto cartesiano das tabelas `funcionarios` e `departamentos`:

```sql
SELECT * FROM funcionarios CROSS JOIN departamentos;
```

Este comando SQL irá retornar todas as combinações possíveis entre as linhas das tabelas `funcionarios` e `departamentos`, resultando em um conjunto de resultados onde cada linha da tabela `funcionarios` é combinada com todas as linhas da tabela `departamentos`.

Com esses exemplos, você terá uma compreensão mais completa dos diferentes tipos de Joins e como aplicá-los em consultas SQL.