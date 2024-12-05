<<<<<<< HEAD
# Receitas Culinárias

Projeto desenvolvido com Laravel, React, MySQL e Integração com API do SUAP. Um website simples que implementa funcionalidades de um caderno de recetias de maneira virtual e acessível para usuários do SUAP (Alunos, Professores, Técnicos, Etc...).

# Front-end

Utilizando React, as páginas da aplicação foram produzidas utilizando Boostrap como framework de CSS. Utiliza os seguintes pacotes: bootstrap, bootstrap-icons, react-bootstrap e react-route-dom. Todos podem ser instalados a partir do seguinte comando:

`> npm install bootstrap bootstrap-icons react-boostrap react-router-dom`

## Inicialização

O servidor se inicia com `npm start` e retorna a página principal da aplicação. Um sistema de rotas é utilizado para redirecionamento entre páginas.
=======
# BLOG - COZINHA EM BYTES

Projeto desenvolvido com Laravel, React, MySQL e Integração com JWT(autenticação). Um website simples que implementa funcionalidades de um caderno de recetias de maneira virtual e acessível para os usuários.

# Front-end

Utilizando React, as páginas da aplicação foram produzidas utilizando Boostrap como framework de CSS. Utiliza os seguintes pacotes: bootstrap, bootstrap-icons,react-icons, react-bootstrap e react-route-dom. Todos podem ser instalados a partir do seguinte comando:

`> npm install bootstrap bootstrap-icons react-icons react-bootstrap react-router-dom`
>>>>>>> f791516b0cc1ce623da7ac394fd2f2d224998641

## Requisição de API

A requisição da API é feita por métodos fetch no arquivo `src/api/http.js`, onde guarda todas as requisições feitas pela aplicação.

# Back-end

<<<<<<< HEAD
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
=======
Utilizando Laravel, a aplicação foi produzida no formato duplo de aplicação de dados, tendo um banco de dados local MySQL e uma integração com API Online. Ou seja, o site deve ser utilizado com alguma conexão a internet.

### Migrar Dados

Uma variação do 'php artisan migrate' abaixo faz com que ele derrube todas as tabelas e crie novas de acrodo com as migrações, ao invés de seguir o padrão stack de criação de migrações.

> `php artisan migrate:fresh`
>>>>>>> f791516b0cc1ce623da7ac394fd2f2d224998641

### Preencher Database

Após criar as migrações, é possível preencher o banco de dados vazio com informações já salva no projeto. Detalhe importante: é preciso que o banco de dados esteja vazio ou não tenha esses dados, caso contrário, os dados irão conflitar precisando rodar o comando de migrar dados (php artisan migrate:fresh) para retornar o banco de dados ao 0.

> `php artisan db:seed`

## Banco de Dados

O banco de dados é feito em MySQL utilizando as Migrations do Laravel. Esse é composto por uma lógica simples de página de receitas, mas eficiente e muito bem pensada. Ele utiliza API REST para realizar a conversão de dados do MySQL para a WEB.

<<<<<<< HEAD
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

Tabela que represente as pessoas que usarão o sistema. Ele possui integridade simples para que pessoas comuns possam se cadastrar mas usuários do SUAP possam integrar suas contas.

#### Perguntas

1. Por que a senha do usuário não é devoldida e no banco facilmente visível?

- Questão inicial de segurança, para mudar isso só ir no arquivo Usuario.php em models e tirar o $hidden. Mas a questão mais segura mesmo é aplicar uma criptografia.

> Contêm: Id, Nome, Matrícula, Email, Senha

### Receitas

A fonte de informação do site. Cada usuário pode publicar diversas receitas e o objetivo é ter um mural completo. Ela conta com informações essenciais para o preparo de pratos e alimentos diversos.

> Contêm: Id, Usuario_id, Título, Ingredientes, Modo de Preparo, Tempo de Preparo e Imagem

#### Perguntas

1. Por que essa tabela tem uma migração a mais para alterar somente um campo? (Imagem)

- O campo 'binary' padrão de campos de tabela para Laravel é, em MySQL, o condizente a um tipo chamado 'blob', esse tipo de dado é conhecido por armazenar arquivos binários. Imagens não podem ser lidas como textos ou números, então são salvas em seu tipo 'original'. No entanto, o blob tem uma limitação de bytes, então é preciso aplicar uma mudança para longblob. E porquê isso não é feito antes? Por algum motivo o Laravel não permite a criação do campo Imagem se for feita na mesma migração, por isso outra.

2. Por que a API não está retornando a imagem?

- O campo imagem é um binário, se retornado ele será formatado em um tipo json textual, e nesse momento ele ganha um monte de caracteres sem sentindo (normalmente o computador reconhece como um tipo de caixa com '[?]') e acarreta em um erro de UTF-8, não é que há problema no banco ou na requuisição, e sim nesse detalhe, pois a imagem precisará passar por uma transformação mais tarde.

### Comentários

Um elogio, uma crítica, observação ou dicas são sempre bem vindas por outros usuários em suas receitas. O sistema de comentários serve para que usuários possam interagir entre sí através das receitas publicadas.

> Contêm: Usuario_id, Receita_id, Texto

#### Perguntas

1. Por que no 'Models' de Comentario.php há funçoes adicionais?

- Nativamente o Laravel não aceita chaves compostas (ou seja, que tenham dois atributos) e não há funções que leiam isso. Então é preciso fazer um tipo de filtro com a query do banco de dados, mas ao fazer isso e utilizar o método $comentario->save() é retornado um erro. Isso acontece pois o Laravel não consegue reconhecer sozinho duas chaves, então há um @override no método. O código foi tirado desse link: https://github.com/laravel/framework/issues/5355#issuecomment-161376267

2. Por que só é permitido um comentário por Usuário em Post?

- Isso deve ser decidido e trabalhado com mais detalhes, mas é uma questão de escolha mesmo, se o professor quiser alterar serão feitas as devidas mudanças.

### Avaliações

Uma avaliação diz o quanto aquela receita foi útil, saborosa, informativa, pouco detalhada... um usuário faz uma avaliação com o objetivo de informar outros sobre a qualidade da receita.

> Contêm: Usuario_id, Receita_id, Estrelas

#### Perguntas

1. Por que no 'Models' de Avaliacao.php há funçoes adicionais?

- Mesmo motivo do Comentário só acessar a seção perguntas dele.

## API

### Como Utilizar

A API é construída para ser utilizada em rotas. Cada rota tem um retorno próprio que indica que uma ação foi realizada. As rotas podem possuir parâmetros como o request, que é herdado automaticamente, ou adicionais, como id. Para acessar todas as rotas, rode:

> `php artisan route:list`

### Autorização

Algumas rotas, no grupo do middleware auth:sanctum, precisma de autorização para serem acessadas. Isso significa que no seu cabeçalho (header) é preciso um campo adicional que indique isso. Em certas ferramentas como o postman é possível colocar esse cabeçalho, adicione os seguintes cabeçalhos:

1. `Authorization Bearer {Seu Token}`
2. `Accept application/json`

O {Seu Token} sempre é retornado após login o registro. Se não for colocado o segundo header pode retornar um erro 'esquisito', mas é que o auth:sanctum só aceita informações em json, e caso isso não seja especificado toda a $request é retornada como um texto plano.
=======
# Instruções BACKEND

Lembrar-se de copiar o ".env.example" para o ".env", lá estabeleça a conexaão via o mysql ou sql
se for o mysql(como nós estamos fazendo) tem que startar o mysql no XAMP Control e colocar no .env o nome da database
(receitas_culinarias) e a db_password do seu mysql, depois dê o comando "php artisan migrate:fresh" e inicie o servidor Laravel.
Lembrar também de gerar a key para o arquivo .env
> `php artisan key:generate`
> 'php artisan serve' 

>>>>>>> f791516b0cc1ce623da7ac394fd2f2d224998641
