import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o CSS do Bootstrap
import "./Carousel.css";

export default function FCarousel(props) {
  // Props
  const { title, receitas } = props;

  // Limite de tamanho para Carousel.Item
  let limit = 3;

  // Agrupando receitas por Carousel.Item
  const groupedReceitas = [];
  for (let i = 0; i < receitas.length; i += limit) {
    groupedReceitas.push(receitas.slice(i, i + limit));
  }

  return (
    <div className="container my-5">
      <h2 className="text-center title">{props.title}</h2>
      <Carousel interval={6000} className="carrosel">
        {groupedReceitas.map((receitasPagina, pageIndex) => (
          <Carousel.Item key={pageIndex}>
            <div className="d-flex justify-content-around receitas">
              {receitasPagina.map((receita, receitaIndex) => {
                const receitaLink = `/receita/${receita.id}`;

                return (
                  <a
                    key={receitaIndex}
                    href={receitaLink}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="text-center">
                      <img
                        className="foto-receita-carrosel"
                        src={`data:image/jpeg;base64,${receita.img}`}
                        alt={receita.titulo}
                        style={{ width: "200px", borderRadius: "10px" }}
                      />
                      <h5>{receita.titulo}</h5>
                      <p>
                        {receita.avaliacao > 0
                          ? receita.avaliacao
                          : "Essa receita não foi avaliada"}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
