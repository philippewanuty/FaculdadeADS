# Springbot

Como criar um projeto:

Na aba de busca siga os passos:

    > maven => 
        Escolha a versão (3.14) =>
        Java  =>
        Escolha o seu domínio (br.com.seunome) =>
         Escolha o seu empacotamento (Jar) =>
        Escolha sua versão =>
        Escolha suas dependencias:
            Spring web
            SpringBootDevTools
            SpringDataJpa
            H2 Database




## O que é API REST

API Rest, ou API RESTful, é um estilo arquitetural para projetar serviços web que oferecem interações de forma padronizada e previsível. REST (Representational State Transfer) é um conjunto de princípios que definem como os recursos da web devem ser acessados e manipulados.

Uma API RESTful é caracterizada por várias características principais:

1. **Recursos**: Em uma API REST, os recursos são a unidade fundamental de exposição de dados ou funcionalidades. Cada recurso é identificado por um URI (Uniform Resource Identifier).

2. **Métodos HTTP**: As operações em recursos são mapeadas para os métodos HTTP padrão, como GET, POST, PUT, DELETE, entre outros. Por exemplo, GET é usado para recuperar dados de um recurso, POST é usado para criar um novo recurso, PUT é usado para atualizar um recurso existente e DELETE é usado para excluir um recurso.

3. **Representações**: Os recursos podem ter diferentes representações, como JSON, XML, HTML, etc. Os clientes podem solicitar a representação desejada usando os cabeçalhos Accept na solicitação HTTP.

4. **Stateless (Sem Estado)**: Uma API REST não mantém o estado da sessão do cliente no servidor entre solicitações. Cada solicitação do cliente contém todas as informações necessárias para serem processadas pelo servidor.

5. **HATEOAS (Hypermedia as the Engine of Application State)**: HATEOAS é um princípio que afirma que um cliente só precisa saber o ponto de entrada inicial (URI) de uma API e, a partir daí, pode navegar pela API dinamicamente, descobrindo os recursos disponíveis e as operações permitidas em cada recurso.

APIs RESTful são amplamente utilizadas na construção de serviços web devido à sua simplicidade, flexibilidade e escalabilidade. Elas são comumente usadas em integrações de sistemas, aplicativos web e mobile, Internet das Coisas (IoT) e muitos outros casos de uso.