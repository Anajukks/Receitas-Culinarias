import React, { useState } from 'react';
import logo from './logo_projeto.png';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
    return (
        <div>
            {/* Barra superior com logo e navegação */}
            <nav className="navbar">
                <div className='logo'>
                    <a href="#">
                    <img src={logo} alt="Cozinha em Bytes" id="logo" />
                    </a>
                </div>
                <div id="right-navbar">
                    {/* Campo de pesquisa */}
                    <div className="search-container">
                        <div className="form-container-n">
                            <form>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="O que você procura?"/>
                                    <button class="btn btn-outline-secondary" type="button" id='submit-search'>Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Ícone do usuário */}
                    <div className="item">
                        <i className="bi bi-person-circle"></i>
                    </div>
                </div>
            </nav>

            
            <hr id='line'/>

            {/* Navegação principal e botão "Publique sua receita" */}
            <div className="navigation-container">
                <div className="navigation">
                    <div className="options">
                        <a href='#'><MenuIcon /></a>
                    </div>
                    <div className="options">
                        <a href="#">Sobre</a>
                    </div>
                    <div className="options">
                        <a href="#">Contate-nos</a>
                    </div>
                </div>
                <div>
                    <button className="botao_receita">Publique sua receita</button>
                </div>
            </div>
        </div>
    );
}

function MenuIcon() {
    const [clique, setClique] = useState(false);

    const menu = () => {
        setClique(!clique); // alterna entre verdadeiro e falso
    };

    return (
        <div>
            <div className="menu-receita" onClick={menu}>
                <div>
                    Receita <i className="bi bi-caret-down-fill"></i>
                </div>
            </div>

            <div className={`menu-content dropdown-menu ${clique ? 'show' : 'hide'}`}>
                <ul className="list-unstyled lista">
                    <li>
                        <a className="dropdown-item" href="#">
                            Almoço
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Jantar
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Lanche
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Doce
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Salgado
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
