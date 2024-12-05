import React from "react";
import "./Comentarios.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Comentario(props) {
  return (
    <div className="container-comentario">
      <div className="comentario-ind">
        <h2>Comentários</h2>
      </div>
      <div id="total-comentarios">
        <p>{props.lista.length} comentários</p>
      </div>
      <hr />
      {props.lista ? (
        props.lista.map((comentario, index) => {
          // Convertendo a data para o formato desejado
          const data = new Date(comentario.created_at);
          const day = String(data.getDate()).padStart(2, "0");
          const month = String(data.getMonth() + 1).padStart(2, "0");
          const year = data.getFullYear();
          const formattedDate = `${day}/${month}/${year}`;

          return (
            <div className="body-coment" key={index}>
              <div id="user">
                <i className="bi bi-person-circle"></i>
                <p>{comentario.usuario_nome}</p>
              </div>
              <p>{comentario.texto}</p>
              <div className="date">{formattedDate}</div>
            </div>
          );
        })
      ) : (
        <p>Sem comentários... </p>
      )}
    </div>
  );
}
