import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setStorageUser } from "../../api/http";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./Cadastro.css";
import logo from "../../assets/logo_projeto.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  // Navegador de páginas
  const navigate = useNavigate();

  // Valores que se alteram ao longo da página
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Função para lidar com a requisição
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Recupera os valores da api
      const data = await login(email, senha);

      // Verificando se há erros
      if (data.errors) {
        // Coletar os erros
        const errors = Object.values(data.errors);

        // Produzir uma mensagem de errors
        let errorMessage = `Aconteceu um erro: `;
        errors.map((error) => (errorMessage += error));

        // Mostrar a Mensagem
        alert(errorMessage);
      } else {
        // Adicionar os valores de id do usuário e access_token no local storage
        setStorageUser(data.user_id, data.access_token);

        // Retorna para a página inicial
        navigate("/");
      }
    } catch (error) {
      // Atualiza na página o erro que aconteceu
      alert(`Aconteceu um erro: ${error}`);
    }
  };

  return (
    <div className="cadastro-container ">
      <div className="cadastro-form">
      <a href="/"><img src={logo}  alt="Logo Cozinha em Bytes" className="cadastro-logo" /></a>
        <h2  id="titulo-h2">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // className={state.errors.email ? "input-error" : ""}
            />
            {/* {state.errors.email && (
              <small className="error-text">{state.errors.email}</small>
            )} */}
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha*</label>
            <input
                type={mostrarSenha ? "text" : "password"} // Tipo alterna entre texto e senha
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)} // Alterna o estado de visibilidade
                className="toggle-password"
              >
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />} {/* Ícone do olho */}
              </button>
            {/* {state.errors.senha && (
              <small className="error-text">{state.errors.senha}</small>
            )} */}
          </div>
          <br></br>
          <button type="submit" className="btn-cadastrar">
            ENVIAR
          </button>
        </form>
       <br></br>
        <a href="/registro" className="cadastro-link">
          Não tem uma conta?{" "}
          <span className="cad-link">
            <i>Cadastre-se</i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Login;
