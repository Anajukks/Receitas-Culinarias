
# BLOG - COZINHA EM BYTES

Projeto desenvolvido com Laravel, React, MySQL e Integração com JWT(autenticação). Um website simples que implementa funcionalidades de um caderno de recetias de maneira virtual e acessível para os usuários.

## Inicialização do servidor frontend

> ` npm start`

# Front-end

Utilizando React, as páginas da aplicação foram produzidas utilizando Boostrap como framework de CSS. Utiliza os seguintes pacotes: bootstrap, bootstrap-icons,react-icons, react-bootstrap e react-route-dom. Todos podem ser instalados a partir do seguinte comando:

> ` npm install bootstrap @popperjs/core bootstrap-icons react-icons react-bootstrap react-router-dom`

## Requisição de API

A requisição da API é feita por métodos fetch no arquivo `src/api/http.js`, onde guarda todas as requisições feitas pela aplicação.

# Back-end

Utilizando Laravel, a aplicação foi produzida no formato duplo de aplicação de dados, tendo um banco de dados local MySQL e uma integração com API Online. Ou seja, esse site deve ser utilizado com alguma conexão a internet.

## Laravel

### Inicializar Servidor

> `php artisan serve`

### Criar Migrações

O comando abaixo cria migrações e pede um nome. Essas migrações são a conexão com o banco de dados, ou seja, serão as tabelas que serão carregadas de acordo com as informações na migration.

> `php artisan make:migrations`

### Migrar Dados

Após colocar os dados das tabelas desejadas nas migrações, o comando abaixo solidica essas alterações criando o banco de dados em si com essas informações. Uma variação dele abaixo faz com que ele derrube todas as tabelas e crie novas de acrodo com as migrações, ao invés de seguir o padrão stack de criação de migrações.

> `php artisan migrate` > `php artisan migrate:fresh`

Utilizando Laravel, a aplicação foi produzida no formato duplo de aplicação de dados, tendo um banco de dados local MySQL e uma integração com API Online. Ou seja, o site deve ser utilizado com alguma conexão a internet.

### Migrar Dados

Uma variação do 'php artisan migrate' abaixo faz com que ele derrube todas as tabelas e crie novas de acrodo com as migrações, ao invés de seguir o padrão stack de criação de migrações.

> `php artisan migrate:fresh`


### Preencher Database

Após criar as migrações, é possível preencher o banco de dados vazio com informações já salva no projeto. Detalhe importante: é preciso que o banco de dados esteja vazio ou não tenha esses dados, caso contrário, os dados irão conflitar precisando rodar o comando de migrar dados (php artisan migrate:fresh) para retornar o banco de dados ao 0.

> `php artisan db:seed`

## Banco de Dados

O banco de dados é feito em MySQL utilizando as Migrations do Laravel. Esse é composto por uma lógica simples de página de receitas, mas eficiente e muito bem pensada. Ele utiliza API REST para realizar a conversão de dados do MySQL para a WEB.


### Model

O modelo é necessário para estabelecer os tipos de dados necessários. Ele também cria as regras de proteçẽos de dados como senhas de usuário. Comando para a criação de modelos:

> `php artisan make:model`

### Controller

O controller é responsável por estabelecer a conexão entre o modelo e rotas, sendo a ponte entre o banco de dados relacional e o NoSQL (API). ELe precisa ser do tipo resource para realizar as operações em um padrão pré-estabelecido, mas controladores normais também tendem a funcionar. Comando para a criação de controllers:

> `php artisan make:controller -resource`

### Route

Define os endereços que poderão ser acessados pelos usuários, para verificar todas as rotas basta:

> `php artisan route:list`

### Middleware

Um processo que acontece antes das requisição chegar ao controle. Nesse projeto é utilizado o auth:sanctum como middleware. Proveniente do pacote Laravel/Sanctum, ele oferece um login de usuário com tokens JWT para segurança de acesso aos dados.

A rota 'login' retorna ao usuário um token de acesso que deve ser utilizado com autorização. Além disso, o tipo de Accept do header é, obrigatoriamente, application/json.

## Tipos de Dados

### Usuários

Tabela que represente as pessoas que usarão o sistema. Ele possui integridade simples para que pessoas comuns possam se cadastrar.

### Receitas

A fonte de informação do site. Cada usuário pode publicar diversas receitas e o objetivo é ter um mural completo. Ela conta com informações essenciais para o preparo de pratos e alimentos diversos.

> Contêm: Id, Usuario_id, Título, Ingredientes, Modo de Preparo, Tempo de Preparo e Imagem


### Comentários

Um elogio, uma crítica, observação ou dicas são sempre bem vindas por outros usuários em suas receitas. O sistema de comentários serve para que usuários possam interagir entre sí através das receitas publicadas.

> Contêm: Usuario_id, Receita_id, Texto


### Avaliações

Uma avaliação diz o quanto aquela receita foi útil, saborosa, informativa, pouco detalhada... um usuário faz uma avaliação com o objetivo de informar outros sobre a qualidade da receita.

> Contêm: Usuario_id, Receita_id, Estrelas


## API

A API é construída para ser utilizada em rotas. Cada rota tem um retorno próprio que indica que uma ação foi realizada. As rotas podem possuir parâmetros como o request, que é herdado automaticamente, ou adicionais, como id. Para acessar todas as rotas, rode:

> `php artisan route:list`

### Autorização

Algumas rotas, no grupo do middleware auth:sanctum, precisma de autorização para serem acessadas. Isso significa que no seu cabeçalho (header) é preciso um campo adicional que indique isso. Em certas ferramentas como o postman é possível colocar esse cabeçalho, adicione os seguintes cabeçalhos:

1. `Authorization Bearer {Seu Token}`
2. `Accept application/json`

O {Seu Token} sempre é retornado após login o registro. Se não for colocado o segundo header pode retornar um erro, mas é que o auth:sanctum só aceita informações em json, e caso isso não seja especificado toda a $request é retornada como um texto plano.
=======
# Instruções BACKEND

Lembrar-se de copiar o ".env.example" para o ".env", lá estabeleça a conexaão via o mysql ou sql
se for o mysql(como nós estamos fazendo) tem que startar o mysql no XAMP Control e colocar no .env o nome da database
(receitas_culinarias) e a db_password do seu mysql, depois dê o comando "php artisan migrate:fresh" e inicie o servidor Laravel.
Lembrar também de gerar a key para o arquivo .env
> `php artisan key:generate`
> 'php artisan serve' 

