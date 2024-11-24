Instruções para o FRONTEND
-
-
dê o comando para criar um projeto react "npx create-react-app nome_projeto"
dê os seguintes comandos para instalar as dependências do Bootstrap
-
COMANDOS NECESSÁRIOS PARA RODAR O FRONT
npm install bootstrap    
npm install react-bootstrap
npm install react- bootstrap bootstrap
npm install bootstrap-icons
npm start - rodar o react
- Segue abaixo a estrutura do Index.js

//index.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Destaque from './Destaque';
import FCarousel from './Carousel';
import TopicoReceita from './TopicoReceita';
import Rodape from './Rodape';
import Sobre from './Sobre';
import Meio from './Meio';
import Contatenos from './Contatenos';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Sobre />
    <Meio />
    <Contatenos />
    <Rodape />
  </React.StrictMode>
);



//index.css



body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}




Instruções BACKEND
-
-
lembrar-se de copiar o ".env.example" para o ".env", lá estabeleça a conexaão via o mysql ou sql
se for o mysql(como nós estamos fazendo) tem que startar o mysql no XAMP Control e colocar no .env o nome da database
(receitas_culinarias) e a db_password do seu mysql, depois dê o comando "php artisan migrate:fresh" e inicie o servidor Laravel.
