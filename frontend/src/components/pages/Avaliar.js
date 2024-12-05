import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createAvaliacao,
  createComentario,
  getStorageUser,
  showAvaliacao,
  showComentario,
  updateAvaliacao,
  updateComentario,
} from "../../api/http";

import "./Avaliar.css";

import logo from "../../assets/logo_projeto.png";

export default function Avaliar() {
  // Navegador de páginas
  const navigate = useNavigate();

  const [rating, setRating] = useState(0); // Quantidade de estrelas selecionadas
  const [hoverRating, setHoverRating] = useState(0); // Quantidade de estrelas ao passar o mouse

  // Identifica se o comentário ou avalição é uma alteração ou novos
  const [avaliacaoCreate, setAvaliacaoCreate] = useState(true);
  const [comentarioCreate, setComentarioCreate] = useState(true);
  const commentRef = useRef(); // Referência ao comentário do usuário

  // Id da Receita
  const { id } = useParams();

  // Pegando valores do usuário
  const { user_id, token } = getStorageUser();

  // Descobrir se o usuário já fez uma avaliação naquela receita
  const discoverRating = async (e) => {
    // Descobrir se há avaliação
    const avaliacao = await showAvaliacao(user_id, id);

    // Descobrir se há comentário
    const comentario = await showComentario(user_id, id);

    return { avaliacao, comentario };
  };

  useEffect(() => {
    const fetchResult = async () => {
      const fetchedResult = await discoverRating();
      const { avaliacao, comentario } = fetchedResult;

      // Alterando caso exista avaliacao ou comentario
      if (avaliacao.estrelas) {
        setRating(avaliacao.estrelas);
        setHoverRating(avaliacao.estrelas);
        setAvaliacaoCreate(false);
      }

      if (comentario.texto) {
        commentRef.current.value = comentario.texto;
        setComentarioCreate(false);
      }
    };
    fetchResult();
  }, []);

  const handleStarClick = (index) => {
    setRating(index + 1); //
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await discoverRating();

    // Recuperando comentário
    const comment = commentRef.current.value;

    // Verificando se há uma avaliação e um comentário
    if (rating === 0 || !comment.trim()) {
      alert("Por favor, selecione uma avaliação e adicione um comentário.");
      return;
    }

    // Identificando se o formulário é para ATUALIZAR ou CRIAR avaliação
    if (avaliacaoCreate) {
      // Realizando a requisição de avaliação
      const avaliacaoData = await createAvaliacao(
        JSON.stringify({
          usuario_id: user_id,
          receita_id: id,
          estrelas: rating,
        }),
        token
      );

      if (avaliacaoData.message) {
        alert(avaliacaoData.message);
        return;
      }
    } else {
      // Realizando atualização de avaliacao
      const updateAvaliacaoData = await updateAvaliacao(
        JSON.stringify({
          usuario_id: user_id,
          receita_id: id,
          estrelas: rating,
        }),
        user_id,
        id,
        token
      );
      if (updateAvaliacaoData.message) {
        alert(updateAvaliacaoData.message);
        return;
      }
    }

    if (comentarioCreate) {
      // Realizando a requisição de comentário
      const comentarioData = await createComentario(
        JSON.stringify({
          usuario_id: user_id,
          receita_id: id,
          texto: comment,
        }),
        token
      );

      if (comentarioData.message) {
        alert(comentarioData.message);
        return;
      }
    } else {
      // Realizando atualização de comentario
      const updateComentarioData = await updateComentario(
        JSON.stringify({
          usuario_id: user_id,
          receita_id: id,
          texto: comment,
        }),
        user_id,
        id,
        token
      );

      if (updateComentarioData.message) {
        alert(updateComentarioData.message);
        return;
      }
    }

    alert("Avaliação atualizada com sucesso!");
    navigate(`/receita/${id}`);
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <img src={logo} alt="Logo Cozinha em Bytes" className="cadastro-logo" />
        <h2>Avalie a Receita</h2>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`bi bi-star${
                index < (hoverRating || rating) ? "-fill" : ""
              }`}
              style={{
                color: index < (hoverRating || rating) ? "orange" : "gray",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
              onClick={() => handleStarClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            ></i>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comentário</label>
          <textarea
            id="comment"
            ref={commentRef}
            placeholder="Escreva seu comentário aqui..."
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Enviar Avaliação
        </button>
      </form>
    </div>
  );
}
