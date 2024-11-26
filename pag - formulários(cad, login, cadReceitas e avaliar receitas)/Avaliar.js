import React, { useState, useRef } from 'react';
import './Avaliar.css';
import logo from './logo_projeto.png';

export default function Avaliar() {
  const [rating, setRating] = useState(0); // Quantidade de estrelas selecionadas
  const [hoverRating, setHoverRating] = useState(0); // Quantidade de estrelas ao passar o mouse
  const commentRef = useRef(); // Referência ao comentário do usuário

  const handleStarClick = (index) => {
    setRating(index + 1); // Define a avaliação fixa
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index + 1); // Atualiza a avaliação ao passar o mouse
  };

  const handleMouseLeave = () => {
    setHoverRating(0); // Remove a avaliação temporária
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;

    if (rating === 0 || !comment.trim()) {
      alert('Por favor, selecione uma avaliação e adicione um comentário.');
      return;
    }

    alert(`Avaliação enviada!\nEstrelas: ${rating}\nComentário: ${comment}`);
    setRating(0); // Reseta as estrelas
    commentRef.current.value = ''; // Limpa o campo de comentário
};

return (
    <div className="feedback-container">
        <form onSubmit={handleSubmit} className="feedback-form">
        <img src={logo}alt="Logo Cozinha em Bytes" className="cadastro-logo" />
            <h2>Avalie a Receita</h2>
            <div className="stars">
                {[...Array(5)].map((_, index) => (
                <i
                    key={index}
                    className={`bi bi-star${index < (hoverRating || rating) ? '-fill' : ''}`}
                    style={{
                        color: index < (hoverRating || rating) ? 'orange' : 'gray',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease',
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
        <button type="submit" className="btn-submit">Enviar Avaliação</button>
        </form>
    </div>
  );
}
