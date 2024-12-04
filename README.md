# BLOG - COZINHA EM BYTES

Projeto desenvolvido com Laravel, React, MySQL e Integração com JWT(autenticação). Um website simples que implementa funcionalidades de um caderno de recetias de maneira virtual e acessível para os usuários.

# Front-end

Utilizando React, as páginas da aplicação foram produzidas utilizando Boostrap como framework de CSS. Utiliza os seguintes pacotes: bootstrap, bootstrap-icons,react-icons, react-bootstrap e react-route-dom. Todos podem ser instalados a partir do seguinte comando:

`> npm install bootstrap bootstrap-icons react-icons react-bootstrap react-router-dom`

## Requisição de API

A requisição da API é feita por métodos fetch no arquivo `src/api/http.js`, onde guarda todas as requisições feitas pela aplicação.

# Back-end

Utilizando Laravel, a aplicação foi produzida no formato duplo de aplicação de dados, tendo um banco de dados local MySQL e uma integração com API Online. Ou seja, o site deve ser utilizado com alguma conexão a internet.

### Migrar Dados

Uma variação do 'php artisan migrate' abaixo faz com que ele derrube todas as tabelas e crie novas de acrodo com as migrações, ao invés de seguir o padrão stack de criação de migrações.

> `php artisan migrate:fresh`

### Preencher Database

Após criar as migrações, é possível preencher o banco de dados vazio com informações já salva no projeto. Detalhe importante: é preciso que o banco de dados esteja vazio ou não tenha esses dados, caso contrário, os dados irão conflitar precisando rodar o comando de migrar dados (php artisan migrate:fresh) para retornar o banco de dados ao 0.

> `php artisan db:seed`

## Banco de Dados

O banco de dados é feito em MySQL utilizando as Migrations do Laravel. Esse é composto por uma lógica simples de página de receitas, mas eficiente e muito bem pensada. Ele utiliza API REST para realizar a conversão de dados do MySQL para a WEB.

# Instruções BACKEND

Lembrar-se de copiar o ".env.example" para o ".env", lá estabeleça a conexaão via o mysql ou sql
se for o mysql(como nós estamos fazendo) tem que startar o mysql no XAMP Control e colocar no .env o nome da database
(receitas_culinarias) e a db_password do seu mysql, depois dê o comando "php artisan migrate:fresh" e inicie o servidor Laravel.
Lembrar também de gerar a key para o arquivo .env
> `php artisan key:generate`
> 'php artisan serve' 

