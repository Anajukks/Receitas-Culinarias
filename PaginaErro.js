import React from "react";
import "./PaginaErro.css"; // Importa o arquivo CSS

const PaginaErro = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">Oops!</h1>
        <p className="error-message">
          Algo deu errado. A página que você está tentando acessar não está disponível.
        </p>
        <button className="error-button" onClick={() => window.history.back()}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default PaginaErro;
