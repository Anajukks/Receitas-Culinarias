import React, { useReducer } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Cadastro.css";
import logo from "../../assets/logo_projeto.png";

const initialState = {
  email: "",
  senha: "",

  errors: {}, // Para armazenar os erros dos campos
};

// Função para gerenciar o estado do formulário
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos
    const errors = {};

    if (!state.email.trim()) errors.email = "Email é obrigatório.";
    if (!state.senha.trim()) errors.senha = "Senha é obrigatória.";

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return;
    }

    dispatch({ type: "CLEAR_ERRORS" });
    alert("Login realizado com sucesso!"); // Simulação de envio
  };

  return (
    <div className="full-page">
      <div className="cadastro-form">
        <img src={logo} alt="Logo Cozinha em Bytes" className="cadastro-logo" />
        <p className="title-login">LOGIN</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={state.email}
              onChange={handleChange}
              className={state.errors.email ? "input-error" : ""}
            />
            {state.errors.email && (
              <small className="error-text">{state.errors.email}</small>
            )}
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
              className={state.errors.senha ? "input-error" : ""}
            />
            {state.errors.senha && (
              <small className="error-text">{state.errors.senha}</small>
            )}
          </div>
          <br></br>
          <button type="submit" className="btn-cadastrar">
            ENVIAR
          </button>
        </form>
        <a href="/login" className="login-link">
          Logar com <span className="suap-link">SUAP</span>
        </a>
        <a href="/registro" className="cadastro-link">
          Não tem uma conta?{" "}
          <span className="cad-link">
            <i>Cadastre-se</i>
          </span>
        </a>
      </div>
    </div>
  );
}
