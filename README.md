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


COMANDOS NECESSÁRIOS PARA RODAR O FRONT
npm install bootstrap    
npm install react-bootstrap
npm install react- bootstrap bootstrap
npm install bootstrap-icons
npm start
