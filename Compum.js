import React, { useState } from "react";
import "./Cadastroreceitas.css";
import logo from "./logo_projeto.png";
const CadastroReceita = () => {
  const [passos, setPassos] = useState([""]);

  const adicionarPasso = () => {
    setPassos([...passos, ""]);
  };

  const atualizarPasso = (index, value) => {
    const novosPassos = [...passos];
    novosPassos[index] = value;
    setPassos(novosPassos);
  };

  return (
    <div className="container">
      <div className="header">
        <img
          src={logo} // Substitua pelo logo real
          alt="Logo Cozinha em Bytes"
        />
        <h1>Cadastrar Receitas</h1>
      </div>
      <form className="formulario">
        {/* Coluna esquerda */}
        <div className="col-esquerda">
          <div className="input-group">
            <label htmlFor="titulo">Título da receita*</label>
            <input type="text" id="titulo" placeholder="Digite o título" />
          </div>
          <div className="input-group">
            <label htmlFor="tempo">Tempo de preparo*</label>
            <input type="number" id="tempo" placeholder="Em minutos" />
          </div>
          <div className="input-group">
            <label htmlFor="ingredientes">Ingredientes*</label>
            <input
              type="text"
              id="ingredientes"
              placeholder="Separe por ponto e vírgula (;)"
            />
          </div>
        </div>

        {/* Coluna direita */}
        <div className="col-direita">
          <label>Modo de preparo*</label>
          <div className="modo-preparo-lista">
            {passos.map((passo, index) => (
              <div className="modo-preparo-item" key={index}>
                <span>{index + 1}</span>
                <input
                  type="text"
                  value={passo}
                  onChange={(e) => atualizarPasso(index, e.target.value)}
                  placeholder={`Passo ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn-adicionar"
            onClick={adicionarPasso}
          >
            +
          </button>
        </div>
      </form>
      <button type="submit" className="btn-enviar">
        Enviar
      </button>
    </div>
  );
};

export default CadastroReceita;
