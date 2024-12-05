import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchReceita } from "../../api/http";

import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import logo from "../../assets/logo_projeto.png";

export default function Navbar() {
  const [pesquisa, setPesquisa] = useState("");
  const [erro, setErro] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const mostrarPopover = () => {
    const bootstrap = require("bootstrap");
    const popover = new bootstrap.Popover(inputRef.current, {
      content: erro ? "Campo vazio ou pesquisa não encontrada!" : "",
      placement: "bottom",
      trigger: "manual",
    });
    popover.show();

    setTimeout(() => popover.hide(), 3000);
  };

  const getPesquisa = async () => {
    if (pesquisa === "") {
      setErro(true);
      mostrarPopover();
      return;
    }

    const data = await searchReceita(pesquisa);

    if (data.id) {
      navigate(`/receita/${data.id}`);
      setErro(false);
      return;
    }

    setErro(true);
    mostrarPopover();
    return;
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Cozinha em Bytes" id="logo" />
          </a>
        </div>
        <div id="right-navbar">
          <div className="search-container">
            <div className="form-container-n">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  getPesquisa();
                }}
              >
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class={`form-control ${erro ? "is-invalid" : ""}`}
                    placeholder="O que você procura?"
                    value={pesquisa}
                    ref={inputRef}
                    onChange={(e) => setPesquisa(e.target.value)}
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="submit"
                    id="submit-search"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="item">
            <a href="/login">
              <i className="bi bi-person-circle"></i>
            </a>
          </div>
        </div>
      </nav>

      <hr id="line" />

      <div className="navigation-container">
        <div className="navigation">
          <div className="options">
            <a href="#">
              {/* <MenuIcon /> */}
            </a>
          </div>
          <div className="options">
            <a href="/registro">Cadastre-se</a>
          </div>
          <div className="options">
            <a href="/sobre">Sobre</a>
          </div>
          <div className="options">
            <a href="/contatenos">Contate-nos</a>
          </div>
        </div>
        <div>
          <a href="/receita/formulario">
          <button className="botao_receita">Publique sua receita</button>
          </a>
        </div>
      </div>
    </div>
  );
}

