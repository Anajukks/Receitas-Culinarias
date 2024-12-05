import React from "react";
import "./TopicoReceitas.css";
import { useNavigate } from "react-router-dom";

export default function TopicoReceita(props) {
  // Convertendo Data
  const data = new Date(props.data);

  // Extraindo componentes da data
  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = data.getFullYear();

  // Navegador de páginas
  const navigate = useNavigate();

  // Para avaliar a receita
  const avaliarReceita = () => {
    navigate(`/receita/${props.id}/avaliacao`);
  };

  return (
    <div>
      <div className="cabeça">
        <h1 className="titulo-receita-ind">{props.title}</h1>
        <div className="informacoes-receita-ind">
          <div id="avaliacao">
            <p id="estrelas" style={{ paddingRight: "5px" }}>
              {props.avaliacoes.found ? (
                Array.from({ length: props.avaliacoes.media }, (_, index) => (
                  <span key={index}>⭐</span>
                ))
              ) : (
                <span>Nenhuma avaliação...</span>
              )}
              <b>
                {props.avaliacoes.found ? props.avaliacoes.media : 0}/5 estrelas
              </b>
            </p>
            <p id="comentario">
              ({props.avaliacoes.found ? props.avaliacoes.quantidade : 0}{" "}
              avaliações)
            </p>
          </div>
          <p className="t1-preparo">
            <b>Tempo de preparo: </b>
            <b id="t2-preparo">{props.tempo}</b>
          </p>
          <button
            type="button"
            className="btn btn-primary btn-g botao_receita"
            onClick={avaliarReceita}
          >
            <b>Avalie ☆</b>
          </button>
        </div>
      </div>
      <div className="imagem-receita-ind">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={`data:image/jpeg;base64,${props.imagem}`}
                alt="ReceitaImagem"
                className="d-block w-100"
              />
            </div>
          </div>
         
      
        </div>
        <p className="publicacao">
          publicado por {props.nome} em {day}/{month}/{year}
        </p>
      </div>
      <div className="instrucao">
        <div className="passo-a-passo">
          <h2>Ingredientes</h2>
          <ul className="ingredientes">
            {props.ingredientes.split(",").map((ingrediente, key) => (
              <li key={key} className="">
                {ingrediente}
              </li>
            ))}
          </ul>
        </div>
        <div className="passo-a-passo">
          <h2 id="preparo">Modo de preparo</h2>
          <ul>
            {props.modo_de_preparo.split(",").map((preparo, key) => (
              <li key={key} className="preparo">
                {preparo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
