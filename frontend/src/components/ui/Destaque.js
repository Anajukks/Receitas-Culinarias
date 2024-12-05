import React from "react";
import "./Destaque.css";

export default function Destaque(props) {
  return (
    <div className="div-red">
      <a href={`/receita/${props.info.id}`} style={{ textDecoration: "none" }}>
        <div className="week-food">
          <div className="picture-food">
            <img
              src={`data:image/jpeg;base64,${props.info.img}`}
              alt="img-destaque"
              id="img-destaque"
            />
          </div>
          <div className="information-food">
            <h4 id="destaque-title">{props.info.titulo}</h4>
            <p className="text-break destaque-descricao">
              Confira umas das nossas deliciosas receitas!
            </p>
            {props.info.avaliacao > 0 ? (
              Array.from({ length: props.info.avaliacao }, (_, index) => (
                <span key={index}>⭐</span>
              ))
            ) : (
              <span>Nenhuma avaliação...</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}