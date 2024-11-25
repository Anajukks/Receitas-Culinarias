import React, { useReducer } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Cadastro.css';
import logo from './logo_projeto.png';


const initialState = {
  nome: '',
  email: '',
  senha: '',
  confirmacaoSenha: '',
  errors: {}, // Para armazenar os erros dos campos
};

// Função para gerenciar o estado do formulário
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
}

export default function Cadastro() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos
    const errors = {};
    if (!state.nome.trim()) errors.nome = 'Nome é obrigatório.';
    if (!state.email.trim()) errors.email = 'Email é obrigatório.';
    if (!state.senha.trim()) errors.senha = 'Senha é obrigatória.';
    if (state.senha !== state.confirmacaoSenha)
      errors.confirmacaoSenha = 'As senhas não coincidem.';

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }

    dispatch({ type: 'CLEAR_ERRORS' });
    alert('Cadastro realizado com sucesso!'); // Simulação de envio
  };

  return (
    <div className="cadastro-container full-page">
      <div className="cadastro-form">
        <img src={logo}alt="Logo Cozinha em Bytes" className="cadastro-logo" />
        <h2>CRIAR CONTA</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome*</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={state.nome}
              onChange={handleChange}
              className={state.errors.nome ? 'input-error' : ''}
            />
            {state.errors.nome && <small className="error-text">{state.errors.nome}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={state.email}
              onChange={handleChange}
              className={state.errors.email ? 'input-error' : ''}
            />
            {state.errors.email && <small className="error-text">{state.errors.email}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha*</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Crie uma senha"
              value={state.senha}
              onChange={handleChange}
              className={state.errors.senha ? 'input-error' : ''}
            />
            {state.errors.senha && <small className="error-text">{state.errors.senha}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmacaoSenha">Confirmação de Senha*</label>
            <input
              type="password"
              id="confirmacaoSenha"
              name="confirmacaoSenha"
              placeholder="Confirme a senha criada"
              value={state.confirmacaoSenha}
              onChange={handleChange}
              className={state.errors.confirmacaoSenha ? 'input-error' : ''}
            />
            {state.errors.confirmacaoSenha && (
              <small className="error-text">{state.errors.confirmacaoSenha}</small>
            )}
          </div>
          <button type="submit" className="btn-cadastrar">
            CADASTRAR
          </button>
        </form>
        <a href="/login" className="login-link">
          Logar com <span className="suap-link">SUAP</span>
        </a>
      </div>
    </div>
  );
}
