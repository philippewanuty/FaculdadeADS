# O que é MVC ?

    Acrônimo de Model View Controller

    - Foco na separação do código, de acordo com sua responsabilidade em três camadas.

   - **Model:**  classes, métodos e funções, acesso e tratamentos de dados

   - **View:**  códigos de interface de usuários

   - **Controller:**  camada intermediaria entre a view e a model


# Framework: Spring Bot

           O Spring Boot é um framework para desenvolvimento backend. Ele é amplamente utilizado no desenvolvimento de aplicativos Java para o lado do servidor, fornecendo uma estrutura para construir e implantar serviços web, APIs RESTful e aplicativos corporativos.

separação em camadas

- **Entity:**

        uma entidade (Entity) representa uma tabela do banco de dados. Ela é geralmente uma classe Java anotada com @Entity que mapeia diretamente para uma tabela no banco de dados, com cada atributo representando uma coluna. O Spring Data JPA simplifica a persistência dessas entidades, permitindo que sejam facilmente inseridas, atualizadas, recuperadas e excluídas do banco de dados.

- **Repository:**

        Os repositories são interfaces responsáveis pela interação com o banco de dados. Eles fornecem métodos para realizar operações de busca, inserção, atualização e exclusão de dados de forma simplificada e consistente. Essas interfaces são frequentemente anotadas com @Repository e são implementadas automaticamente pelo Spring Data JPA, facilitando o acesso aos dados através de consultas orientadas a objetos.

        EX: public interface CategoriaRepository extends JpaRepository<Catergoria,int

- **Service:**

        Os services são classes responsáveis por implementar a lógica de negócios da aplicação. Eles encapsulam operações específicas que não estão diretamente relacionadas à manipulação de requisições HTTP, como acesso a dados, cálculos complexos ou integrações externas. Os services geralmente são anotados com @Service e são injetados nos controllers para serem utilizados. Isso promove a separação de preocupações e reutilização de código, mantendo os controllers focados em lidar com as requisições HTTP e delegando a lógica de negócios aos services.

- **Controller:**

        Os controllers são classes responsáveis por receber as requisições HTTP dos clientes e direcioná-las para o processamento apropriado. Eles geralmente são anotados com @RestController e definem métodos para lidar com diferentes endpoints da API. Cada método de controller é mapeado para um endpoint específico e pode retornar dados para o cliente, geralmente em formato JSON ou XML. Os controllers desempenham um papel fundamental na estruturação e organização das APIs em uma aplicação Spring Boot.





Obs*:

#### O que é Query?

            Query é um comando enviado ao banco de dados para realizar operações como recuperar, inserir, atualizar ou excluir dados.

            Ex: 
            
            1. SELECT: Recupera dados.
            2. INSERT: Adiciona novos registros.
            3. UPDATE: Atualiza registros existentes.
            4. DELETE: Remove registros.
            5. CREATE: Cria novos objetos.
            6. ALTER: Modifica a estrutura.
            7. DROP: Exclui objetos do banco de dados.


#### O que é API RESTful?

                APIs RESTful são interfaces de programação de aplicações (APIs) baseadas nos princípios da arquitetura REST (Representational State Transfer). Elas permitem que sistemas se comuniquem e compartilhem dados de maneira padronizada, utilizando operações HTTP (GET, POST, PUT, DELETE) para realizar operações em recursos, geralmente retornando dados no formato JSON ou XML. Essas APIs são projetadas para serem simples, escaláveis, e facilmente compreensíveis e utilizadas por desenvolvedores.